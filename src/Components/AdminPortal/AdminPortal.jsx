
import { useFormik } from 'formik';
import { AdminValidation } from './Schema';
import './AdminPortal.scss'
import { NavLink } from 'react-router-dom';


const AdminPortal = () => {

    const {touched, errors, handleBlur, handleSubmit, handleChange} = useFormik({
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
                        <button><NavLink to='/tableprojects'>
                            Submit
                            </NavLink>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdminPortal;
