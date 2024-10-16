import React from 'react'
import Frontbar from './Frontbar'

interface SideBarProps {
   isOpen: boolean
   onClose: () => void
   onNew: () => void
   children: React.ReactNode
}

const DesktopSidebar: React.FC<SideBarProps> = ({ isOpen, onClose, onNew, children }) => {

   return (
      <div className='fixed lg:inset-y-0 lg:left-0 z-40 w-72 '>
         <Frontbar onClose={onClose} isOpen={isOpen} onNew={onNew} />
         <main className={`h-full overflow-auto ${!isOpen ? 'hidden' : ''}`}>
            {children}
         </main>
      </div>
   )
}

export default DesktopSidebar