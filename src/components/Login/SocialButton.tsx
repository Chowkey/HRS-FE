import React from 'react'
import { IconType } from 'react-icons'

interface SocialButtonProps {
   icon: IconType
   onClick: () => void
}

const SocialButton: React.FC<SocialButtonProps> = ({ icon: IconType, onClick }) => {
   return (
      <button type='button' onClick={onClick}
         className='inline-flex w-full justify-center rounded-md bg-white px-4 py-2
    text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300
    hover:bg-gray-50 focus:outline-offset-0 focus:outline-none'>
         <IconType />
      </button>
   )
}

export default SocialButton