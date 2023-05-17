import LoadingBar from "../LoadingBar";

import "./style.scss";

export default function UploadLoadingCard() {
    return (
        <div className="upload-loading-card">
            <p className="title">Uploading...</p>
            <LoadingBar />
        </div>
    );
}
