import React, { useState } from 'react';
import './ContactUs.css'
import { Divider, Radio, Upload } from 'antd';
import { useForm } from 'react-hook-form';
import ContactWithMultiple from '../Sheard/ContactWithMultiple/ContactWithMultiple';
import GoogleReview from '../Sheard/GoogleReview/GoogleReview';
import { ref } from 'firebase/storage';
import { storage } from '../../firebase.init';



const ContactUs = () => {



    // From Radio Option -----------------------------------
    const [radioValue, setRadioValue] = useState(1);
    const onChangeRedio = (e) => {
      console.log('radio checked', e.target.value);
      setRadioValue(e.target.value);
    };

    
    // Ant Image Upload ----------------------------------------
    const [fileList, setFileList] = useState([]);
    const [firebaseImage, setFirebaseImage] = useState('')
    const onChange = ({ fileList: newFileList }) => {
        setFileList(newFileList);
        //`````````````````````````````````````````````
        // const formdata = new FormData();
            for (let index = 0; index < fileList.length; index++) {
                const file = fileList[index];
                setFirebaseImage(file)
                console.log('before',firebaseImage)

                console.log(firebaseImage.type)
                if (firebaseImage === null) {
                    return console.log('null');
                }else{
                    const imageRef = ref(storage, `images/${firebaseImage.name}`);
                    const uploadTask = imageRef.put(firebaseImage.name)
                    uploadTask.on('state _changed', (snapshot) => {
                        console.log(snapshot)
                    })
                }
                // console.log('uploaded file',firebaseImage);
            }
      };

      const onPreview = async (file) => {
        let src = file.url;
        if (!src) {
          src = await new Promise((resolve) => {
            const reader = new FileReader();
            reader.readAsDataURL(file.name);
            reader.onload = () => resolve(reader.result);
          });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow?.document.write(image.outerHTML);
        // console.log(file);
      };

    // React Hooks Form HandleSubmit ------------------------
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async data => {
        
        // const emailData = {...data, radioValue, fileList}
        const emailData = {...data, radioValue}
        console.log(emailData)
        const res = await fetch("http://localhost:5000/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({emailData})
        })

        const newData = await res.json();
        console.log(newData);

        // Send Data For Image Upload -------------------
        
    };
    




    return (
        <>
            <div className='contact_page_background py-3'>
                <div className="container py-5">
                    <h5 className='fs-2 for_font_family text-white'>Request a Quote</h5>
                    <p className='text-white'>By submitting your info on this form, you are agreeing to be contacted regarding your service request by means of telephone, email, or text</p>
                </div>
            </div>
            <div className='container my-5'>
                <div className="row gx-4">
                    <div className="col-md-6">
                        <div className=' p-md-5 p-3 md-bg-light'>
                            <p className='fw-bold fs-5'>Our reliable Central Jersey service techicians are committed to you! Satisfaction Guaranteed.</p>
                            <p className='text-center'>You can Contact with Us directly</p>
                            <ContactWithMultiple/>
                            <Divider/>
                            <p className='fs-4 for_font_family'>Leave a Review</p>
                            <GoogleReview/>
                        </div>
                    </div>
                    <div className="col-md-6 p-4 border rounded shadow-sm">
                        <p className='for_font_family fs-4 text-center mb-0'>Get In Touch</p>
                        <p className='text-center mb-3'>We are try to response your mail shortly</p>
                        {/* Form --------------------------------------------------------------------------------- */}
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <p className='my-0 fw-bold'>Your Name <span className='text-danger'>*</span></p>
                            <input 
                                className='contact_form_input' 
                                type="text"
                                {...register("name", { required: true })}/>
                            <p className='my-0 fw-bold'>Your E-mail <span className='text-danger'>*</span></p>
                            <input 
                                className='contact_form_input' 
                                type="email"
                                {...register("email", { required: true })}/>
                            <p className='my-0 fw-bold'>Zip Code</p>
                            <input 
                                className='contact_form_input' 
                                type="text"
                                {...register("zipCode")} />

                            <p className='my-2 fw-bold'>Share a Photo</p>
                            <Upload
                                // action="http://localhost:3000"
                                listType="picture-card"
                                fileList={fileList}
                                onChange={onChange}
                                onPreview={onPreview}
                                type='file'
                                >
                                {fileList.length < 5 && '+ Upload'}
                            </Upload>   
                            <p className='fw-bold fs-5'>Tell us what you need done.</p>
                            <textarea 
                                rows="4" 
                                className='d-block w-full contact_form_text_area'
                                {...register("message")}/>
                            <p className='my-2 fw-bold'>How did you hear about us?<span className='text-danger'>*</span></p>
                            <Radio.Group onChange={onChangeRedio} value={radioValue}>
                                <Radio value={'Social media'}>Social media</Radio>
                                <Radio value={'Google search'}>Google search</Radio>
                                <Radio value={'Friend recommendation'}>Friend recommendation</Radio>
                                <Radio value={`I don't remember`}>I don't remember</Radio>
                            </Radio.Group>
                            <input className='bg-info btn fw-bold mt-3 d-block ms-auto' type="submit" value={'Submit'}/>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactUs;