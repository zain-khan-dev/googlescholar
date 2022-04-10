import { createSlice } from '@reduxjs/toolkit';


const signupSlice = createSlice({
    name: 'signup',
    initialState:null,
    reducers: {
        setGoogleUser(state, action) {
            return action.payload
        }
    }   
})

export const {setGoogleUser} = signupSlice.actions
export default signupSlice.reducer