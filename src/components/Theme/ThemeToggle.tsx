import React, { useState, useEffect } from 'react'
import { FiSun, FiMoon } from 'react-icons/fi'

const ThemeToggle = () => {
   const [darkMode, setDarkMode] = useState(false)

   useEffect(() => {
      if (darkMode) {
         document.documentElement.classList.add('dark')
      } else {
         document.documentElement.classList.remove('dark')
      }
   }, [darkMode])

   const toggleDarkMode = () => {
      setDarkMode(!darkMode)
   }

   return (
      <button className='fixed w-16 h-16 top-8 right-8 bg-neutral-900 dark:bg-white rounded-full text-white dark:text-black font-semibold' onClick={toggleDarkMode}>
         <div className='flex items-center justify-center'>
            {darkMode
               ? <FiSun size={26} />
               : <FiMoon size={26} />}
         </div>
      </button>
   )
}

export default ThemeToggle