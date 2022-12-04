import React, { useEffect } from 'react';
import { useState } from "react";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { storage } from "../../firebase.init";


const TestPage = () => {

    // State to store uploaded file
    const [file, setFile] = useState("");

    const handleUpload = async () => {
        try {
            const imageUrl = [];
            if(file.length > 0){
                for (let i = 0; i < file.length; i++) {
                    const imgName = file[i].name + Date.now();
                    const storageRef = ref(storage, `/mehedi/${imgName}`);
                    const uploadTask = await uploadBytesResumable(storageRef, file[i]);
                    const url = await getDownloadURL(uploadTask.ref);
                    imageUrl.push({src: url});
                }
                console.log(imageUrl);
            }
            
        } catch (error) {
            console.log(error)
        }
    }
    



// const handleUpload = () => {
    
// if (!file) {
// alert("Please upload an image first!");
// }

// const storageRef = ref(storage, `/files/${file.name}`);

// // progress can be paused and resumed. It also exposes progress updates.
// // Receives the storage reference and the file to upload.
// const uploadTask = uploadBytesResumable(storageRef, file);

// uploadTask.on(
// "state_changed",
// (snapshot) => {
// const percent = Math.round(
// (snapshot.bytesTransferred / snapshot.totalBytes) * 100
// );

// // update progress
// setPercent(percent);
// },
// (err) => console.log(err),
// () => {
// // download url
// getDownloadURL(uploadTask.snapshot.ref).then((url) => {
// console.log(url);
// });
// }
// );
// };
    return (
        <div>
            <input
                type="file"
                onChange={(e) => {
                    const imageFiles = e.target.files;
                    return setFile(imageFiles)
                }}
                multiple
                required
            />

      <button onClick={handleUpload}> Upload Image</button>
    </div>
    );
};

export default TestPage;