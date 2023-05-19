/* eslint-disable @typescript-eslint/no-explicit-any */
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import DragArea from "../DragArea";

import { useStore } from "../../store";

import { storage } from "../../firebase";

import "./style.scss";

export default function UploadCard() {
    const setIsUploading = useStore((state) => state.setIsUploading);
    const setImageLink = useStore((state) => state.setImageLink);

    const handleUpload = (image: any) => {
        const storageRef = ref(storage, `images/${image.name}`);
        const metadata = {
            contentType: "image/jpeg",
        };
        const uploadTask = uploadBytesResumable(storageRef, image, metadata);
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                if (snapshot.state === "running") {
                    setIsUploading(true);
                }
            },
            (error: unknown) => {
                alert("Error: " + error);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setIsUploading(false);
                    setImageLink(downloadURL);
                });
            }
        );
    };

    const handleChange = (e: any) => {
        handleUpload(e.target.files[0]);
    };

    return (
        <div className="upload-card-wrapper">
            <p className="heading">Upload your image</p>
            <p className="sub-heading">File should be Jpeg, Png,...</p>
            <DragArea />
            <p className="or-text">Or</p>
            <label className="upload-btn-wrapper">
                <input
                    type="file"
                    className="upload-btn"
                    onChange={handleChange}
                    accept="image/*"
                />
                Choose a file
            </label>
        </div>
    );
}
