
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'
import { useFormik } from 'formik';
import { ContactFormValidation } from '../AdminPortal/Schema';

const Contact = () => {

  const form = useRef();

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      from_name: '',
      from_email: '',
      message: '',
    },
    validationSchema: ContactFormValidation,
    onSubmit: (values) => {
      emailjs.sendForm('service_hjjw357', 'template_z9h92kf', form.current, '56vy_N2xER3gT-Hu3')
        .then((result) => {
          console.log(result.text);
          console.log('Message send')
        }, (error) => {
          console.log(error.text);
        });
    }
  })

  return (

    <section className="contact container section" id="contact">
      <h2 className="sectionTitle">Get In Touch</h2>
      <div className="contactContainer">
        <form className='contactForm' ref={form} onSubmit={handleSubmit}>
          
            <div className='contactFormDiv'>
              <label htmlFor="from_name"></label>
              <input type="text" name="from_name" id="from_name" placeholder='Enter your name/organization name'
                value={values.from_name} onBlur={handleBlur} onChange={handleChange} className='contactFormInput'/>
              {errors.from_name && touched.from_name ? (<p className='error'>{errors.from_name}</p>) : null}
            </div>
            <div className='contactFormDiv'>
              <label htmlFor="from_email"></label>
              <input type="text" name="from_email" id="from_email" placeholder='Enter your email address'
                value={values.from_email} onBlur={handleBlur} onChange={handleChange} className='contactFormInput'/>
              {errors.from_email && touched.from_email ? (<p className='error'>{errors.from_email}</p>) : null}
            </div>
            <div className='contactFormDiv'>
              <textarea name="message" id="message" cols="30" rows="10" className='contactFormInput contactFormArea' placeholder='Write your message' value={values.message} onBlur={handleBlur} onChange={handleChange}></textarea>
            </div>            
            <button type='submit' value='send' className='btn'>Send Message</button>            
        </form>
      </div>
    </section>
  )
}

export default Contact
