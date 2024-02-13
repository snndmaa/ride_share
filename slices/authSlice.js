import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    isToken: false,
}

const reducers = {
    setIsToken: (state, action) => {
        state.isToken = action.payload
    },
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers,
})

export const { setIsToken } = authSlice.actions
export default authSlice.reducer