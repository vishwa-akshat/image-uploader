// import { useState } from "react";
// import { storageRef } from "./firebase";
// import { uploadBytesResumable, getDownloadURL } from "firebase/storage";
import Home from "./pages/Home";

function App() {
    // const [image, setImage] = useState(null);

    // const handleChange = (e) => {
    //     if (e.target.files[0]) {
    //         setImage(e.target.files[0]);
    //     }
    // };

    // const handleUpload = () => {
    //     const storage = storageRef(`images/${image.name}`);
    //     const metadata = {
    //         contentType: "image/jpeg",
    //     };
    //     const uploadTask = uploadBytesResumable(storage, image, metadata);
    //     uploadTask.on(
    //         "state_changed",
    //         (snapshot) => {
    //             // Observe state change events such as progress, pause, and resume
    //             // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    //             const progress =
    //                 (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //             console.log("Upload is " + progress + "% done");
    //             switch (snapshot.state) {
    //                 case "paused":
    //                     console.log("Upload is paused");
    //                     break;
    //                 case "running":
    //                     console.log("Upload is running");
    //                     break;
    //             }
    //         },
    //         (error) => {
    //             // Handle unsuccessful uploads
    //         },
    //         () => {
    //             // Handle successful uploads on complete
    //             // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    //             getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
    //                 console.log("File available at", downloadURL);
    //             });
    //         }
    //     );
    // };
    // <input type="file" onChange={handleChange} />
    // <button onClick={handleUpload}>Upload</button>

    return (
        <div className="App">
            <Home />
        </div>
    );
}

export default App;
