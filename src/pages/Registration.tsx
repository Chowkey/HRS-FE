import React, { useState } from 'react'
import RegisteredForm from '../components/Login/RegisteredForm'
import Logo from '../public/logo.png'
import ThemeToggle from '../components/Theme/ThemeToggle'

const Registration = () => {
   const [pageTitle, setPageTitle] = useState('Sign in to your account')
   return (
      <div className='bg-gray-100 dark:bg-gray-900 min-h-screen'>
         <div className='flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8'>
            <div className='sm:mx-auto sm:w-full sm:max-w-full'>
               <img alt='logo' className='mx-auto w-48 h-48 object-cover' src={Logo} />
            </div>
            <h2 className="mt-4 text-center text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
               {pageTitle}
            </h2>
            <RegisteredForm setPageTitle={setPageTitle} />
            <ThemeToggle />
         </div>
      </div>
   )
}

export default Registration