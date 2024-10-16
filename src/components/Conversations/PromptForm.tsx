import React, { useState, useEffect } from 'react'
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';
import { HiPaperAirplane } from 'react-icons/hi2';
import UploadWidget from './UploadWidget';
import MessageInput from './MessageInput';
import api from '../../api/test'

const PromptForm = () => {
   const [prompts, setPrompts] = useState<any>([])
   const [lastPromptId, setLastPromptId] = useState<number>(0);
   const { register, handleSubmit, setValue, formState: { errors } } = useForm<FieldValues>({
      defaultValues: {
         content: ''
      }
   })

   useEffect(() => {
      const fetchPrompts = async () => {
         const response = await api.get('/prompts')
         setPrompts(response.data)
      }
      fetchPrompts()
   }, [])

   useEffect(() => {
      if (prompts.length > 0) {
         const ids = prompts.map((prompt: any) => prompt.id);
         const maxId = Math.max(...ids);
         setLastPromptId(maxId);
      }
   }, [prompts]);

   const onSubmit: SubmitHandler<FieldValues> = (data: any) => {
      setValue('content', '', { shouldValidate: true })
      api.post('/prompts', {
         id: lastPromptId + 1,
         user: 'USER',
         title: 'New Prompt',
         ...data,
      }).then(() => {
         setValue('content', '', { shouldValidate: false })
      })
   }


   return (
      <div className='py-4 px-4 border-t border-l flex items-center gap-2 lg:gap-4 w-full'>
         <UploadWidget />
         <form onSubmit={handleSubmit(onSubmit)}
            className='flex items-center w-full'>
            <MessageInput id='content' register={register} errors={errors}
               required placeholder='Write a message for ChatGPT' />

            <button type='submit' className='rounded-full p-2 bg-sky-500 hover:bg-sky-600 cursor-pointer transition'>
               <HiPaperAirplane size={20} className='text-white' />
            </button>
         </form>
      </div>
   )
}

export default PromptForm