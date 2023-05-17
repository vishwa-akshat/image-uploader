import React from "react";

import ImageLinkBlock from "../ImageLinkBlock";

import doneIcon from "../../assets/done.svg";

import "./style.scss";

type Props = {
    image?: string;
};

export default function UploadSuccessCard({
    image = "https://images.unsplash.com/photo-1459802071246-377c0346da93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=709&q=80",
}: Props) {
    return (
        <div className="upload-success-card">
            <div className="done-icon-wrapper">
                <img className="done-icon" src={doneIcon} alt="done icon" />
            </div>
            <p className="heading">Uploaded Successfully</p>
            <img className="uploaded-image" src={image} alt="uploaded image" />
            <ImageLinkBlock imageLink={image} />
        </div>
    );
}
