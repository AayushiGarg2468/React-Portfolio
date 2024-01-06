
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.scss'
import { useFormik } from 'formik';
import { ContactFormValidation } from '../AdminPortal/Schema';

const Contact = () => {

  const form = useRef();

  const {values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
    initialValues: {
      from_name: '',
      from_email: '',
      message: '',
    },
    validationSchema: ContactFormValidation,
    onSubmit: (values)=>{
      emailjs.sendForm('service_hjjw357', 'template_z9h92kf', form.current, '-NXQcFNiMaZWVHH-a')
      .then((result) => {
          console.log(result.text);
          console.log('Message send')
      }, (error) => {
          console.log(error.text);
      });
    }
  })

  return (
    <div className='ContactBlock'>
      <div className='ContactBox'>
        <div className='ContactContainer'>
          <h1>Get Contact Information</h1>
          <form className='formContainer' ref={form} onSubmit={handleSubmit}>
            <div>
              <label htmlFor="from_name"></label>
              <input type="text" name="from_name" id="from_name" placeholder='Enter your name/organization name' 
              value={values.from_name} onBlur={handleBlur} onChange={handleChange}/>
              {errors.from_name && touched.from_name ? (<p className='error'>{errors.from_name}</p>) : null}
            </div>
            <div>
              <label htmlFor="from_email"></label>
              <input type="text" name="from_email" id="from_email" placeholder='Enter your email address' 
              value={values.from_email} onBlur={handleBlur} onChange={handleChange}/>
              {errors.from_email && touched.from_email ? (<p className='error'>{errors.from_email}</p>) : null}
            </div>
            <div >
              <label htmlFor="message"></label>
              <input type="text" name="message" id="message" placeholder='Type message' className='textfield'
               value={values.message} onBlur={handleBlur} onChange={handleChange}/>
              {errors.message && touched.message ? (<p className='error'>{errors.message}</p>) : null}
            </div>
            <button type='submit' value='send'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
