import * as Yup from 'yup';

export const AdminValidation = Yup.object({
    email: Yup.string().email().required('Please enter the correct email'),
    password: Yup.string().min(6).max(12).required('Please enter the correct password')
})

export const ContactFormValidation = Yup.object({
    from_name: Yup.string().required('Please enter your name/organization name'),
    from_email: Yup.string().email().required('Please enter the correct email'),
    message: Yup.string().required('Please enter something')    
})
