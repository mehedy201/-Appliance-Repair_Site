import React, {  useState } from 'react';
import './ContactUs.css'
import { Radio, Upload } from 'antd';
import { useForm } from 'react-hook-form';
import ContactWithMultiple from '../Sheard/ContactWithMultiple/ContactWithMultiple';
import axios from 'axios';
// import emailjs from '@emailjs/browser'



const ContactUs = () => {
    // From Radio Option -----------------------------------
    const [radioValue, setRadioValue] = useState(1);
    const onChangeRedio = (e) => {
      console.log('radio checked', e.target.value);
      setRadioValue(e.target.value);
    };
    
    // Ant Image Upload ----------------------------------------
    const [fileList, setFileList] = useState([]);
    const onChange = async ({ fileList: newFileList }) => {
        setFileList(newFileList);
        //`````````````````````````````````````````````
        // const formdata = new FormData();
        //     for (let index = 0; index < fileList.length; index++) {
        //         const file = fileList[index];
        //         formdata.append('file', file);
        //         console.log('uploaded file',file);
        //     }
        // try {
        //     const result = await axios.post("http://localhost:5000/file", formdata);
        //     // console.log(formdata, result);
        // } catch (error) {
        //     console.erroor(error);
        // }





        
        // console.log('Console form onchange',fileList);
      };

      const onPreview = async (file) => {
        let src = file.url;
        if (!src) {
          src = await new Promise((resolve) => {
            const reader = new FileReader();
            reader.readAsDataURL(file.originFileObj);
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
        
        const emailData = {...data, radioValue, fileList}
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
            <div className='contact_page_background'>
                <div className="container py-5">
                    <h5 className='fs-2 for_font_family text-white'>Request a Quote</h5>
                    <p className='text-white'>By submitting your info on this form, you are agreeing to be contacted regarding your service request by means of telephone, email, or text</p>
                </div>
            </div>
            <div className='container my-5'>
                <div className="row">
                    <div className="col-md-6 p-4">
                        <p className='fw-bold fs-4'>Our reliable Central Jersey service techicians are committed to you! Satisfaction Guaranteed.</p>
                        <ContactWithMultiple/>
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
                                action="http://localhost:3000/contact-us"
                                listType="picture-card"
                                fileList={fileList}
                                onChange={onChange}
                                onPreview={onPreview}
                                type='file'
                                >
                                {fileList.length < 5 && '+ Upload'}
                            </Upload>  
                            {/* <input type="file" name='image' {...register("file")} /> */}

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