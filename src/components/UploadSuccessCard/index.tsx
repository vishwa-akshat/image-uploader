import ImageLinkBlock from "../ImageLinkBlock";

import { useStore } from "../../store";

import doneIcon from "../../assets/done.svg";

import "./style.scss";

export default function UploadSuccessCard() {
    const imageLink = useStore((state) => state.imageLink);
    return (
        <div className="upload-success-card">
            <div className="done-icon-wrapper">
                <img className="done-icon" src={doneIcon} alt="done icon" />
            </div>
            <p className="heading">Uploaded Successfully</p>
            <img
                className="uploaded-image"
                src={imageLink || ""}
                alt="uploaded imageLink"
            />
            <ImageLinkBlock imageLink={imageLink} />
        </div>
    );
}
