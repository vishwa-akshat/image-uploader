import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

import mountain from "../../assets/mountain.png";

import "./style.scss";

export default function DragArea() {
    const onDrop = useCallback((acceptedFiles: unknown) => {
        console.log(acceptedFiles);
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
    });

    return (
        <div className="drag-area" {...getRootProps()}>
            <input {...getInputProps()} />
            <img src={mountain} alt="image" className="mountain-image" />
            {isDragActive ? (
                <p className="drag-text">Drop the files here ...</p>
            ) : (
                <p className="drag-text">Drag & Drop your image here</p>
            )}
        </div>
    );
}
