import UploadCard from "../../components/UploadCard";
import UploadLoadingCard from "../../components/UploadLoadingCard";
import UploadSuccessCard from "../../components/UploadSuccessCard";

import { useStore } from "../../store";

import "./style.scss";

export default function Home() {
    const { isUploading, imageLink } = useStore();

    const renderContent = () => {
        if (!isUploading && imageLink === null) {
            return <UploadCard />;
        } else if (isUploading && imageLink === null) {
            return <UploadLoadingCard />;
        } else if (!isUploading && imageLink !== null) {
            return <UploadSuccessCard />;
        }
    };
    return <div className="container">{renderContent()}</div>;
}
