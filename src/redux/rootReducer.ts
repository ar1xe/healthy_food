import { combineReducers } from "@reduxjs/toolkit";
import menuReducer from "./slices/menuItemSlice"


const rootReducer = combineReducers({
    menuItems: menuReducer,

})


export default rootReducer;