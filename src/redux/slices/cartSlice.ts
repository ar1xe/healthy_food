import {createSlice, PayloadAction } from "@reduxjs/toolkit"
import { menuItem, MenuItemI } from "../../Components/MainPageContent/Menu/MenuItem/modelItemMenu"

interface CartI {
    items: {item: MenuItemI, count: number}[],
}

const initialState: CartI = {
    items: [],
}

const cartSlice = createSlice({
    name: "cart",     
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<MenuItemI>) => {
            const currentItem = state.items.find(item => item.item.id === action.payload.id);
            if(currentItem){
                return {
                    items: state.items.map(item => {
                        if(item.item.id === action.payload.id){
                            return { 
                                item: action.payload, 
                                count: currentItem.count + 1
                            }
                        }
                        return item;
                    }) 
                }                             
            } else {
                 state.items.push({
                    item: action.payload,
                    count: 1,
                })
             }          
        },
        delItem: (state, action: PayloadAction<MenuItemI>) => {
            const currentItem = state.items.find(item => item.item.id === action.payload.id);
            if(currentItem) {
                if(currentItem.count === 1){
                    return {
                        items: state.items.filter(item => item.item.id !== action.payload.id)
                    }
                    
                } if(currentItem.count > 1) {
                    return {
                        items: state.items.map(item => {
                            if(item.item.id === action.payload.id){
                                return { 
                                    item: action.payload, 
                                    count: currentItem.count - 1
                                }
                            }
                            return item;
                        })
                    }
                }
             
            }
        },
        
    }
}) 

export const { addItem, delItem } = cartSlice.actions;

export default cartSlice.reducer;

