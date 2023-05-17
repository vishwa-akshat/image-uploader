import { initializeApp } from "firebase/app";
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAOeGWI64p9Bln_3Z759F90W7YKCXhKjjk",
    authDomain: "image-uploader-e0f67.firebaseapp.com",
    projectId: "image-uploader-e0f67",
    storageBucket: "image-uploader-e0f67.appspot.com",
    messagingSenderId: "776831422376",
    appId: "1:776831422376:web:3139e9631c05073885d79d",
};

export const app = initializeApp(firebaseConfig);

export const storage = getStorage();
