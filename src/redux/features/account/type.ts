

export interface RegisteredUser {
   id: string,
   username: string,
   fullname: string | null,
   phone_number: string | null,
   email_address: string,
   password: string | null,
   photoURL: string | null
}

export interface AccountState {
   user: RegisteredUser | null
   loading: boolean
   error: string | null
   access_token: string | null
}



