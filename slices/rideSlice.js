import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    instance: null
}

const reducers = {
    setRide: (state, action) => {
        state.instance = action.payload
    }
}

const rideSlice = createSlice({
    name: 'ride',
    initialState,
    reducers,
})

export const { setRide } = rideSlice.actions

export const selectRide = (state) => state.ride.instance

export default rideSlice.reducer