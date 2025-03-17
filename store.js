import { configureStore } from '@reduxjs/toolkit'

import navReducer from './slices/navSlice'
import loginReducer from './slices/loginSlice'
import signupReducer from './/slices/signupSlice'
import authReducer from './slices/authSlice'
import rideReducer from './slices/rideSlice'

export const store = configureStore({
  reducer: {        
    auth: authReducer,
    login: loginReducer,
    signup: signupReducer,
    nav: navReducer,
    ride: rideReducer,
  },
})

// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch