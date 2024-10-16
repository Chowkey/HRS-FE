export interface ChatRoom {
   id: string
   title: string
   create: string
   update: string | null
   is_archived: boolean
}

export interface Message {
   chatroom: ChatRoom
   question: string
   answer: string
   timestamp: string
}