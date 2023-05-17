import React from "react";

import DragArea from "../DragArea";
import Button from "../Button";

import "./style.scss";

export default function UploadCard() {
    return (
        <div className="upload-card-wrapper">
            <p className="heading">Upload your image</p>
            <p className="sub-heading">File should be Jpeg, Png,...</p>
            <DragArea />
            <p className="or-text">Or</p>
            <Button>Choose a file</Button>
        </div>
    );
}
