import { createSlice } from '@reduxjs/toolkit';
import { RegisteredUser, AccountState } from './type';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: AccountState = {
   user: null,
   loading: false,
   error: null,
   access_token: null
}

export const accountSlice = createSlice({
   name: 'account',
   initialState,
   reducers: {
      registered: (state, action: PayloadAction<RegisteredUser>) => {
         state.loading = true
         state.user = action.payload
      },
      login: (state, action: PayloadAction<RegisteredUser>) => {
         state.loading = true
         state.user = action.payload
         // state.access_token = action.payload.access_token
      },
      logout: (state) => {
         state.access_token = null
         state.user = null
      }
   }

})

export const { registered, login, logout } = accountSlice.actions
export default accountSlice.reducer