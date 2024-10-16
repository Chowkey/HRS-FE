import React, { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast'
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import {
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   UserCredential
} from 'firebase/auth'
import useFacebookLogin from '../../hooks/social/Facebook'
import useGithubLogin from '../../hooks/social/Github'
import useGoogleLogin from '../../hooks/social/Google'
import { auth, db } from '../../firebase/firebase.config'
import { RegisterSchema, RegisterForm } from '../../context/FormContext'
import { useAppDispatch, useAppSelector } from '../../hooks/StoreHook'
import { login, registered } from '../../redux/features/account/reducer'
import InputForm from './InputForm'
import Button from './Button'
import SocialButton from './SocialButton'
import { BsGithub, BsFacebook, BsGoogle } from 'react-icons/bs'
import { doc, setDoc } from 'firebase/firestore';


interface Props {
   setPageTitle: (title: string) => void
}
const RegisteredForm: React.FC<Props> = ({ setPageTitle }) => {
   const [authType, setAuthType] = useState<'login' | 'register'>('register')
   const [loading, setLoading] = useState<boolean>(false)
   const [error, setError] = useState<string | null>(null)

   const dispatch = useAppDispatch()
   const navigate = useNavigate()

   const { user } = useAppSelector((state) => state.account)
   console.log(user);

   useEffect(() => {
      if (user) {
         navigate('/')
      }
   }, [user, navigate])

   const { logInFacebook, facebookSuccess } = useFacebookLogin()
   const { logInGithub, githubSuccess } = useGithubLogin()
   const { logInGoogle, googleSuccess } = useGoogleLogin()

   if (facebookSuccess || githubSuccess || googleSuccess) {
      toast.success('Login successful')
   }

   const handleAuthType = useCallback(() => {
      authType === 'login' ? setAuthType('register') : setAuthType('login')
   }, [authType])

   useEffect(() => {
      authType === 'login' ? setPageTitle('Sign in to your account') : setPageTitle('Create your new account')
   }, [authType, setPageTitle])

   const { register, handleSubmit, watch, formState: { errors } } = useForm<RegisterForm>({
      resolver: yupResolver<RegisterForm>(RegisterSchema)
   })

   const handleFormSubmit: SubmitHandler<RegisterForm> = async (data: RegisterForm) => {
      setError(null)
      setLoading(true)
      try {
         if (authType === 'register') {
            if (data.password !== data.confirmPassword) {
               setError('Passwords do not match')
               setLoading(false)
               toast.error('Passwords do not match')
               return
            }
            toast.success('Registration successful')
            navigate('/')
            const { user }: UserCredential = await createUserWithEmailAndPassword(auth, data.email, data.password)
            await setDoc(doc(db, 'users', user.uid), {
               username: data.username,
               fullname: data.fullname,
               phone_number: data.phonenumber,
               email_address: data.email,
               photoURL: null
            })
            dispatch(registered({
               email_address: data.email,
               username: data.username,
               photoURL: null,
               id: user.uid,
               fullname: data.fullname,
               phone_number: data.phonenumber,
               password: data.password
            }))
         }
         else {
            const { user }: UserCredential = await signInWithEmailAndPassword(auth, data.email, data.password)
            dispatch(login({
               email_address: data.email,
               username: data.username,
               photoURL: null,
               id: user.uid,
               fullname: data.fullname,
               phone_number: data.phonenumber,
               password: data.password
            }))
         }
      } catch (error: any) {
         setError(error.message)
         toast.error(error.message)
      }
      setLoading(false)
   }
   const password = watch('password')

   if (authType === 'register') {
      return (
         <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
            <div className='bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10'>
               <form action=""
                  className='space-y-6'
                  onSubmit={handleSubmit(handleFormSubmit)}>
                  <div className='space-y-6'>
                     <InputForm id='username' label='Username' register={register} errors={errors} />
                     <InputForm id='fullname' label='Fullname' register={register} errors={errors} />
                     <InputForm id='phonenumber' label='Phone number' register={register} errors={errors} />
                     <InputForm id='email' label='Email Address' type='email' register={register} errors={errors} />
                     <InputForm id='password' label='Password' type='password' register={register} errors={errors} />
                     <InputForm id='confirmPassword' label='Confirm password' type='password' passwordValue={password} register={register} errors={errors} />
                     <Button type='submit' fullWidth={true}>
                        Register
                     </Button>
                  </div>
               </form>
               <div className='mt-6'>
                  <div className='relative'>
                     <div className='absolute flex inset-0 items-center' >
                        <div className='w-full border-t border-gray-300'></div>
                     </div>
                     <div className='relative flex text-sm justify-center'>
                        <span className='bg-white px-2 text-gray-500'>
                           Or continue with
                        </span>
                     </div>
                  </div>
               </div>
               <div className='mt-6 flex gap-1'>
                  <SocialButton icon={BsGithub} onClick={logInGithub} />
                  <SocialButton icon={BsFacebook} onClick={logInFacebook} />
                  <SocialButton icon={BsGoogle} onClick={logInGoogle} />
               </div>
               {/* Create Account or Login */}
               <div className='flex gap-2 justify-center text-sm mt-6 px-2 text-gray-500'>
                  Already have an account
                  <button onClick={() => handleAuthType()} className='underline cursor-pointer'>
                     Login
                  </button>
               </div>
            </div>
         </div>
      )
   }
   return (
      <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
         <div className='bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10'>
            <form action=""
               className='space-y-6'
               onSubmit={handleSubmit(handleFormSubmit)}>
               <div className='space-y-6'>
                  <InputForm id='username' label='Username' register={register} errors={errors} />
                  <InputForm id='email' label='Email Address' type='email' register={register} errors={errors} />
                  <InputForm id='password' label='Password' type='password' register={register} errors={errors} />
                  <Button type='submit' fullWidth={true}>
                     Log in
                  </Button>
               </div>
            </form>
            <div className='mt-6'>
               <div className='relative'>
                  <div className='absolute flex inset-0 items-center' >
                     <div className='w-full border-t border-gray-300'></div>
                  </div>
                  <div className='relative flex text-sm justify-center'>
                     <span className='bg-white px-2 text-gray-500'>
                        Or continue with
                     </span>
                  </div>
               </div>
            </div>
            <div className='mt-6 flex gap-1'>
               <SocialButton icon={BsGithub} onClick={logInGithub} />
               <SocialButton icon={BsFacebook} onClick={logInFacebook} />
               <SocialButton icon={BsGoogle} onClick={logInGoogle} />
            </div>
            {/* Create Account or Login */}
            <div className='flex gap-2 justify-center text-sm mt-6 px-2 text-gray-500'>
               Don't have an account yet?
               <button onClick={() => handleAuthType()} className='underline cursor-pointer'>
                  Register
               </button>
            </div>
         </div>
      </div>
   )
}

export default RegisteredForm