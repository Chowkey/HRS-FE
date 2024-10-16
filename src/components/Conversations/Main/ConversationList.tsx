import React, { useEffect, useState } from 'react'
import api1 from '../../../api/test'
import gpt from '../../../public/ChatGPT.jpg'
import clsx from 'clsx'

const ConversationList = () => {
   const [conversations, setConversations] = useState<any>([])

   useEffect(() => {
      const fetchConversations = async () => {
         const messages = await api1.get('/messages')
         setConversations(messages.data)
      }
      fetchConversations()
   }, [setConversations])

   return (
      <div className='flex-1 overflow-y-auto bg-gray-100'>
         {conversations.map((conversation: any) => {
            const isOwn = conversation.user === 'USER'
            const container = clsx('flex gap-3 ;lg:px-32 md:px-24 sm:px-16 py-4', isOwn ? 'justify-end' : 'justify-start items-center')
            const body = clsx('flex flex-col gap-2', isOwn ? 'items-end' : 'items-start')
            const message = clsx('text-pretty w-full overflow-hidden p-3 rounded-2xl', isOwn ? 'bg-blue-500 text-white' : 'bg-transparent ')
            return (
               <div>

                  <div key={conversation.id} className={container}>
                     {!isOwn && <img className='rounded-full h-8 w-8' src={gpt} alt='ChatGPT' />}
                     <div className={body}>
                        <div className={message}>
                           {conversation.content}
                        </div>
                     </div>
                  </div>
               </div>
            )
         })}
      </div>
   )
}

export default ConversationList