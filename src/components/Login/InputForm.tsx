import React from 'react'
import clsx from 'clsx'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { RegisterForm } from '../../context/FormContext'

interface InputFormProps {
   label: string,
   id: 'username' | 'fullname' | 'phonenumber' | 'email' | 'password' | 'confirmPassword',
   type?: string,
   required?: boolean,
   register: UseFormRegister<RegisterForm>,
   errors: FieldErrors<RegisterForm>,
   disabled?: boolean,
   passwordValue?: string
}

const InputForm: React.FC<InputFormProps> = ({
   label, id, type = 'text', required = false, register, errors, disabled = false, passwordValue
}) => {
   return (
      <div>
         <label htmlFor={id} className='block text-sm font-medium leading-6 text-gray-900'>
            {label}
         </label>
         <div className='mt-2'>
            <input type={type} id={id} disabled={disabled}
               {...register(id, {
                  required,
                  validate: id === 'confirmPassword'
                     ? (value) => value === passwordValue
                     : undefined
               })}
               placeholder={`Enter your ${label}`}
               className={clsx(
                  `form-input block w-full rounded-md border-0 py-1 text-gray-900
                  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
                  focus:ring-2 focus:ring-inset focus:ring-sky-600 outline-none
                  sm:text-sm sm:leading-6 pl-2`,
                  errors[id] && 'focus:ring-rose-500',
                  disabled && 'opacity-50 cursor-default'
               )}
            />
            {errors[id]?.message && <p className="mt-2 text-sm text-red-600">{errors[id]?.message}</p>}
         </div>
      </div>
   )
}

export default InputForm