import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ChatRoom, Message } from './type';
import type { PayloadAction } from '@reduxjs/toolkit';
import axios from '../../../api/axios'

// ChatRoom fetch
const fetchChatRooms = createAsyncThunk('chatrooms/fetchChatRooms', async () => {
   const response = await axios.get('/chatrooms/');
   return response.data;
});

const createChatRoom = createAsyncThunk('chatrooms/createChatRoom', async (title: string) => {
   const response = await axios.post('/chatrooms/', { title });
   return response.data;
});

const updateChatRoom = createAsyncThunk('chatrooms/updateChatRoom', async ({ id, title, is_archived }: { id: string; title: string; is_archived: boolean }) => {
   const response = await axios.put(`/chatrooms/${id}`, { title, is_archived });
   return response.data;
});

const deleteChatRoom = createAsyncThunk('chatrooms/deleteChatRoom', async (id: string) => {
   await axios.delete(`/chatrooms/${id}`);
   return id;
});
// Message fetch
const fetchMessages = createAsyncThunk('messages/fetchMessages', async (chatroom_id: string) => {
   const response = await axios.get(`/chatrooms/${chatroom_id}/`);
   return response.data;
});

const postMessage = createAsyncThunk('messages/postMessage', async ({ chatroom_id, question }: { chatroom_id: string; question: string }) => {
   const response = await axios.post(`/chatrooms/${chatroom_id}/`, { question });
   return response.data;
});

const chatRoomSlice = createSlice({
   name: 'ChatRoom',
   initialState: {
      chatRooms: [] as ChatRoom[],
      messages: [] as Message[],
      loading: false,
      error: null
   },
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(fetchChatRooms.fulfilled, (state, action) => {
         state.loading = false;
         state.chatRooms = action.payload;
      });

      builder.addCase(createChatRoom.fulfilled, (state, action) => {
         state.chatRooms.push(action.payload);
      });

      builder.addCase(updateChatRoom.fulfilled, (state, action) => {
         const chatRoom = state.chatRooms.find((chatRoom) => chatRoom.id === action.payload.id);
         if (chatRoom) {
            chatRoom.title = action.payload.title;
            chatRoom.is_archived = action.payload.is_archived;
         }
      });

      builder.addCase(deleteChatRoom.fulfilled, (state, action) => {
         state.chatRooms = state.chatRooms.filter((chatRoom) => chatRoom.id !== action.payload);
      });

      builder.addCase(fetchMessages.fulfilled, (state, action) => {
         state.loading = false;
         state.messages = action.payload;
      })

      builder.addCase(postMessage.fulfilled, (state, action) => {
         state.messages.push(action.payload);
      });
   }
});

export const { reducer: chatRoomReducer } = chatRoomSlice;