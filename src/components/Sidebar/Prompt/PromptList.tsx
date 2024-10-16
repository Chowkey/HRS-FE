import React, { useState, useEffect } from 'react'
import PromptHistory from './PromptHistory'
import api from '../../../api/test2'

const PromptList = () => {
   const [prompts, setPrompts] = useState([])
   useEffect(() => {
      const fetchData = async () => {
         const response = await api.get('/prompts')
         setPrompts(response.data)
      }

      fetchData()
   }, [])
   return (
      <aside className='fixed lg:pt-16 sm:pt-4 lg:left-3 lg:w-72 sm:w-72 block overflow-y-auto w-full left-0 '>
         <div className='px-3'>
            <div className='flex-col'>
               <div className='text-xl font-bold text-neutral-900 py-3'>
                  Chat history
               </div>
               {prompts.length > 0 && prompts.map((prompt: any) => {
                  return <PromptHistory key={prompt.id} data={prompt.title} />
               })}
            </div>
         </div>
      </aside>
   )
}

export default PromptList