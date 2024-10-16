import React from 'react'
import { HiEllipsisHorizontal } from 'react-icons/hi2'
import Avatar from '../NavBar/Avatar'

interface HeaderProps {
   onOpen: () => void
}

const Header = ({ onOpen }: HeaderProps) => {
   return (
      <div className='w-full flex border-b-[1px] sm:px-4 py-5 px-4 lg:px-6 justify-between items-center shadow-sm relative'>
         <div className='flex gap-3 items-center '>
            <div className='lg:hidden block hover:text-sky-600 text-sky-500 transition cursor-pointer' onClick={onOpen}>
               <HiEllipsisHorizontal size={32} />
            </div>
            <div className='text-2xl pl-10 font-medium text-gray-900'>
               Chat GPT
            </div>
            <div className='absolute right-2.5'>
               <Avatar />
            </div>
         </div>
      </div>
   )
}

export default Header