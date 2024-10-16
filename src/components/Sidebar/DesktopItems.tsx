import React from 'react'
import clsx from 'clsx'


interface ItemsProps {
   label: string
   icon: any
   onClick?: () => void
}


const DesktopItems: React.FC<ItemsProps> = ({
   label, icon: Icon, onClick
}) => {
   const handleClick = () => {
      if (onClick)
         return onClick()
   }
   return (
      <li onClick={handleClick}>
         <div
            className={clsx(`group flex gap-x-3 p-2 text-sm font-semibold text-gray-500 hover:text-black hover:bg-gray-100 rounded-md`)}>
            <Icon className='h-6 w-6 shrink-0' />
         </div>
      </li>
   )
}

export default DesktopItems