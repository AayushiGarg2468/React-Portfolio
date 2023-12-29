import * as Yup from 'yup';

export const AdminValidation = Yup.object({
    email: Yup.string().email().required('Please enter the correct email'),
    password: Yup.string().min(6).max(12).required('Please enter the correct password')
})
