import React, { useState } from 'react';
import './ContactUs.css'
import { Divider, Radio } from 'antd';
import { useForm } from 'react-hook-form';
import ContactWithMultiple from '../Sheard/ContactWithMultiple/ContactWithMultiple';
import GoogleReview from '../Sheard/GoogleReview/GoogleReview';
import { useNavigate } from 'react-router-dom';
import { storage } from '../../firebase.init';
import { ref , getDownloadURL, uploadBytesResumable} from "firebase/storage";
import { MdOutlineCloudDone } from 'react-icons/md';


const ContactUs = () => {
    const navigate = useNavigate()

    // From Radio Option -----------------------------------
    const [radioValue, setRadioValue] = useState(1);
    const onChangeRedio = (e) => {
      console.log('radio checked', e.target.value);
      setRadioValue(e.target.value);
    };
    
    // const [file, setFile] = useState('')
    const [inputUpload, setInputUpload] = useState('')
    const [imgUrl, setImgUrl] = useState([]);
 
    // Handle upload OnChange---------------------------------
    const handleUpload = async (file) => {
        setInputUpload([]);
        console.log(file)
        try {
                var imageUrl = [];
                for (let i = 0; i < file.length; i++) {
                    const imgName = file[i].name + Date.now();
                    const storageRef = ref(storage, `/contat/${imgName}`);
                    const uploadTask = await uploadBytesResumable(storageRef, file[i]);
                    const url = await getDownloadURL(uploadTask.ref);
                    imageUrl.push({src: url});
                    setImgUrl(imageUrl)
                    console.log(imgUrl)
                
                    console.log(imageUrl);
                    for (let i = 0; i < imageUrl.length; i++) {
                        const element = imageUrl[i];
                        setInputUpload(element)
                        console.log('inputUpload', element)
                    }
                console.log('imageUpload')
            }
            
        } catch (error) {
            console.log(error)
        }
    }

    const { register, handleSubmit, reset, formState: {error} } = useForm();
    const onSubmit = async data =>{

        if(error){
            alert('Error', error)
        }else{
        // Sent Email Data Server ----------------------
        
            const emailData = {...data, radioValue, imgUrl}
            fetch('http://localhost:5000/register',{
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(emailData)
            })
            .then(res => res.json())
            .then(data => {
                if(data.success){
                    console.log('data', data)
                    reset();
                    setRadioValue(null)
                    navigate('/email-sent')
                }
                if(data.error){
                    alert('Email Not Sent')
                }
            })
        }
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
                            <div className='d-flex justify-content-between align-items-center mb-4'>
                                <input
                                    type="file"
                                    id='imgUpload'
                                    className='file_upload_input'
                                    onChange={(e) => handleUpload(e.target.files)}
                                    multiple
                                    required
                                />
                            {
                               inputUpload.src && <MdOutlineCloudDone className="file_upload_icon"/>
                            }

                            </div> 

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
            <script src="https://upload-widget.cloudinary.com/global/all.js" type="text/javascript"></script>  
        </>
    );
};

export default ContactUs;