import {createSlice, PayloadAction } from "@reduxjs/toolkit"
import { menuItem, MenuItemI } from "../../Components/MainPageContent/Menu/MenuItem/modelItemMenu"
import type { RootState } from "../../redux/store"



interface MenuItems {
    items: MenuItemI[]
}

const initialState: MenuItems = {
    items: menuItem,
}

const menuItemsSlice = createSlice({
    name: "menuItems",
    initialState,
    reducers: {}
}) 



export default menuItemsSlice.reducer;


