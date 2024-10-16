import * as yup from 'yup'

export const RegisterSchema = yup.object().shape({
   username: yup
      .string()
      .min(3, 'Username must be at least 3 characters')
      .required('Username is required'),
   fullname: yup
      .string()
      .min(3, 'Full name must be at least 3 characters')
      .required('Full name is required'),
   phonenumber: yup
      .string()
      .matches(/^[0-9]+$/, 'Phone number must be a number')
      .min(10, 'Phone number must be at least 10 characters')
      .max(10, 'Phone number must be at most 10 characters')
      .required('Phone number is required'),
   email: yup
      .string()
      .email('Invalid email')
      .required('Email is required'),
   password: yup
      .string()
      .min(8, 'Password must be at least 8 characters')
      .max(12, 'Password must be at most 12 characters')
      .required('Password is required'),
   confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Passwords must match')
      .required('Confirm password is required'),
})




export interface RegisterForm {
   username: string
   fullname: string | null
   phonenumber: string | null
   email: string
   password: string
   confirmPassword: string | null
}
