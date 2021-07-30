import {createSlice, PayloadAction } from "@reduxjs/toolkit"
import { MenuItemI } from "../../Components/MainPageContent/Menu/MenuItem/modelItemMenu"
import type { RootState } from "../../redux/store"

interface CounterState {
    counterNum: number
}

const initialState: CounterState = {
    counterNum: 0
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state, action:PayloadAction<number>) => {
            state.counterNum = state.counterNum + action.payload
        },
        decrement: (state, action:PayloadAction<number>) => {
            state.counterNum = state.counterNum - action.payload
        },
    }
   
})

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer