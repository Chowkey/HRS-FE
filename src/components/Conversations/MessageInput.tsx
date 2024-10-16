// MessageInput.tsx
import React, { useState } from 'react';
import { UseFormRegister, FieldValues, FieldErrors } from 'react-hook-form'

interface PromptProps {
   placeholder?: string
   id: string
   type?: string
   required?: boolean
   register: UseFormRegister<FieldValues>
   errors: FieldErrors
}

const MessageInput: React.FC<PromptProps> = ({
   placeholder, id, type, required, register, errors
}) => {
   return (
      <div className='relative w-full pl-1.5 pr-3'>
         <input type={type} id={id} {...register(id, { required })} placeholder={placeholder}
            className='text-gray-900 py-2 px-4 bg-neutral-200 rounded-full focus:outline-none w-full' />
      </div>
   );
}

export default MessageInput;