import React from 'react'
import { HiEllipsisHorizontal } from 'react-icons/hi2'

interface PromptHistoryProps {
   data: string
   key: number
}

const PromptHistory: React.FC<PromptHistoryProps> = ({ data }) => {
   return (
      <div onClick={() => { }} className='w-full group relative flex items-center space-x-3 pl-2 pr-2.5 py-4 bg-white hover:bg-neutral-200 rounded-lg cursor-pointer'>
         <div className='focus:outline-none justify-between grow overflow-hidden whitespace-nowrap items-center flex'>
            <div className='text-md font-semibold text-neutral-400 text-left'>
               {data}
            </div>
            <div className='absolute inset-y-0 right-0 items-center pr-2 opacity-0 group-hover:opacity-100 group-hover:flex group-hover:bg-neutral-200 group-hover:text-neutral-500 cursor-pointer rounded-lg' onClick={() => { }}>
               <HiEllipsisHorizontal size={32} />
            </div>
         </div>
      </div>
   );
}
export default PromptHistory