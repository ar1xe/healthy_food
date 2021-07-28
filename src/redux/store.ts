import { configureStore, createReducer } from '@reduxjs/toolkit'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import menuReducer from "./slices/menuItemSlice"
import cartReducer from "./slices/cartSlice"

export const store = configureStore({
  reducer: {
    menuItems: menuReducer,
    cart: cartReducer,
    
  }, 
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch