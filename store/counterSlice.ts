import {createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit"

export type CounterState = {
    value : number;
}

const initialState : CounterState = {
    value : 0
}

const counterSlice = createSlice({
    name : "counter",
    initialState,
    reducers:{
        increase : (state)=>{
            state.value += 1
        },
        decrease : (state)=>{
            state.value -= 1
        },
        increaseByAmount : (state, action : PayloadAction<number> )=>{
            state.value +=  action.payload;
        },
        setAmount : (state , action : PayloadAction<number>)=>{
            state.value = action.payload;
        }
    }
});

export default counterSlice.reducer;
export const {increase , decrease , increaseByAmount , setAmount } = counterSlice.actions;