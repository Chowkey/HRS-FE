import React from 'react'
import { motion } from 'framer-motion'
import Frontbar from './Frontbar'

interface SideBarProps {
   isOpen: boolean
   onClose: () => void
   onNew: () => void
   children: React.ReactNode
}

const MobileSidebar: React.FC<SideBarProps> = ({ isOpen, onClose, onNew, children }) => {
   return (
      <>
         <div className={`fixed inset-0 bg-gray-500 bg-opacity-50 transition-opacity ${!isOpen ? 'hidden' : ''}`} />
         <motion.div className='fixed left-0 top-0 z-40 h-full w-[300px] bg-white drop-shadow-xl'
            initial={{ x: '-100%' }}
            animate={{ x: isOpen ? 0 : '-100%', opacity: isOpen ? 1 : 0 }}
            exit={{ x: '-100%', opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}>
            <div>
               <Frontbar onClose={onClose} isOpen={isOpen} onNew={onNew} />

               <main className={`h-full overflow-auto ${!isOpen ? 'hidden' : ''}`}>
                  {children}
               </main>
            </div>
         </motion.div>
      </>
   )
}

export default MobileSidebar