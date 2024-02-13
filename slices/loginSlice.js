import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    email: '',
    phoneNumber: '',
    password: '',
}

const reducers = {
    setEmail: (state, action) => {
        state.email = action.payload
    },
    setPhoneNumber: (state, action) => {
        state.phoneNumber = action.payload
    },
    setPassword: (state, action) => {
        state.password = action.payload
    }
}

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers,
})

export const { setEmail, setPhoneNumber, setPassword } = loginSlice.actions
export default loginSlice.reducer