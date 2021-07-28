import {createSlice, PayloadAction } from "@reduxjs/toolkit"
import { menuItem, MenuItemI } from "../../Components/MainPageContent/Menu/MenuItem/modelItemMenu"
import type { RootState } from "../../redux/store"



interface CartI {
    items: string[]
}

const initialState: CartI = {
    items: []
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<MenuItemI>) => {
            state.items.push(action.payload.title)
        }
    }
}) 

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;

