/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import { storage } from "../../firebase";

import { useStore } from "../../store";

import mountain from "../../assets/mountain.png";

import "./style.scss";

export default function DragArea() {
    const setIsUploading = useStore((state) => state.setIsUploading);
    const setImageLink = useStore((state) => state.setImageLink);

    const onDrop = useCallback((acceptedFiles: any) => {
        handleUpload(acceptedFiles[0]);
    }, []);

    const { fileRejections, getRootProps, getInputProps, isDragActive } =
        useDropzone({
            onDrop,
            accept: {
                "image/jpeg": [],
                "image/png": [],
            },
        });

    useEffect(() => {
        if (fileRejections.length !== 0) {
            alert(fileRejections[0].errors[0].message);
            window.location.reload();
        }
    }, [fileRejections]);

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

    return (
        <div className="drag-area" {...getRootProps()}>
            <input accept="image/*" {...getInputProps()} />
            <img src={mountain} alt="image" className="mountain-image" />
            {isDragActive ? (
                <p className="drag-text">Drop the files here ...</p>
            ) : (
                <p className="drag-text">Drag & Drop your image here</p>
            )}
        </div>
    );
}
