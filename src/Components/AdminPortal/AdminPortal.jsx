import React from 'react';
import { useFormik } from 'formik';
import { AdminValidation } from './Schema';
import './AdminPortal.css'

const AdminPortal = () => {

    useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: AdminValidation,

    })
    return (

        <div className='AdminBlock'>
            <div className='AdminBox'>
                <div className="AdminContainer">
                    <h1>ADMIN LOGIN</h1>
                    <form className='formContainer'>
                        <div className='inputFields'>
                            <label htmlFor='email' />
                            <input
                                type="text"
                                placeholder="Enter your E-mail Address"
                                name="email"
                            />
                        </div>
                        <div>
                            <label htmlFor='password' />
                            <input
                                type="password"
                                placeholder="Enter your password"
                                name="password"
                            />
                        </div>
                        <button
                            type="submit"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdminPortal;
