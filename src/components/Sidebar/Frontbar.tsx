import React from 'react'
import { RiSidebarFoldFill } from "react-icons/ri";
import { RiChatNewFill } from "react-icons/ri";
import { FaTrashCan } from "react-icons/fa6";
import DesktopItems from './DesktopItems';

const Items = [
   {
      label: 'Close sidebar',
      icon: RiSidebarFoldFill,

   },
   {
      label: 'Add new chat',
      icon: RiChatNewFill
   },
   {
      label: 'Delete a chat',
      icon: FaTrashCan
   }
]

interface FrontbarProps {
   onClose: () => void
   onNew?: () => void
   isOpen: boolean
}

const Frontbar: React.FC<FrontbarProps> = ({ onClose, isOpen, onNew }) => {
   return (
      <aside className={`lg:fixed lg:inset-x-0 lg:left-0 lg:z-40 lg:w-72 xl:px-4 lg:overflow-x-auto lg:pb-4 lg:flex justify-between ${isOpen ? 'lg:border-r-[1px]' : ''} sm:flex sm:justify-between sm:w-full`}>
         <nav className='mt-4 flex'>
            <ul role='list' className='flex justify-between w-full'>
               <DesktopItems key={Items[0].label} label={Items[0].label} icon={Items[0].icon} onClick={onClose} />
               <div className={`flex absolute right-0 items-center ${!isOpen ? 'hidden' : 'sm:flex'}`}>
                  {Items.slice(1).map((item) => {
                     return <DesktopItems key={item.label} label={item.label} icon={item.icon} onClick={onNew} />
                  })}
               </div>
            </ul>
         </nav>
      </aside>
   )
}

export default Frontbar