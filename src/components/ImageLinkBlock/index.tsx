import Button from "../Button";

import "./style.scss";

type Props = {
    imageLink: string;
};

export default function ImageLinkBlock({ imageLink }: Props) {
    const handleLinkCopy = () => {
        navigator.clipboard.writeText(imageLink);
    };
    return (
        <div className="image-link-block">
            <p className="image-link">{imageLink}</p>
            <Button onClick={handleLinkCopy}>Copy Link</Button>
        </div>
    );
}
