import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    firstName: null,
    lastName: null,
    email: null,
    phoneNumber: null,
    password: null,
}

const reducers = {
    setFirstName: (state, action) => {
        state.firstName = action.payload
    },
    setLastName: (state, action) => {
        state.lastName = action.payload
    },
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

const signupSlice = createSlice({
    name: 'signup',
    initialState,
    reducers,
})

export const { setFirstName, setLastName, setPhoneNumber, setEmail, setPassword } = signupSlice.actions
export default signupSlice.reducer