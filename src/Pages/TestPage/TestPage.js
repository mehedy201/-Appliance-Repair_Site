import React, { useEffect, useState } from 'react';
import axios from 'axios';



const TestPage = () => {
  // Ant Image Upload input----------------------------------------
  const [fileList, setFileList] = useState([]);
  // const onChange = ({ fileList: newFileList }) => {
  //     setFileList(newFileList);
  //   };

  //   const onPreview = async (file) => {
  //     let src = file.url;
  //     if (!src) {
  //       src = await new Promise((resolve) => {
  //         const reader = new FileReader();
  //         reader.readAsDataURL(file.name);
  //         reader.onload = () => resolve(reader.result);
  //       });
  //     }
  //     const image = new Image();
  //     image.src = src;
  //     const imgWindow = window.open(src);
  //     imgWindow?.document.write(image.outerHTML);
  //     // console.log(file);
  //   };
    
    const handleClick = () => {
      console.log('click')
      // for (let i = 0; i < fileList.length; i++) {
        const image = fileList;
        const imageName= image.name
        console.log("filelist", image)

        const formData = new FormData();
        formData.append('email-image', imageName);
        formData.append('upload_preset', "dstktryic");
        const url = 'https//api.cloudinary.com/v1_1/dstktryic/image/upload'

        // axios.post( url , formData).then(res => console.log(res))
        fetch(url , {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: {
     data: formData,
    },
   })
   .then((response) => response.json())
   .then((responseJson) => {
     console.log(responseJson)
   })
   .catch((error) => {
     console.error(error);
   });
        


        // Create the file metadata

      // }
    }

    return (
        <div className='my-5 container'>
           {/* <Upload
              // action="http://localhost:3000"
              listType="picture-card"
              fileList={fileList}
              onChange={onChange}
              onPreview={onPreview}
              type='file'
              multiple={true}
              >
              {fileList.length < 5 && '+ Upload'}
            </Upload>   */}
            {/* <button onClick={handleClick}>submit</button> */}
           <input type="file" 
             onChange ={(event) => {
             setFileList(event.target.files[0])
             console.log(fileList)
           }}/>
            <button onClick={handleClick}>submit</button>
        </div>
    );
};

export default TestPage;