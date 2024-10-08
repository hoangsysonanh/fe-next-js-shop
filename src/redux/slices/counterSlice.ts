 'use client';

import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
    value: number;
}

const inittialState: CounterState = {
    value: 0
}

export const counterSlice = createSlice(
    {
        name: 'counter',
        initialState: inittialState,
        reducers: {
            increment: (state) => {
                state.value += 1
            },
            decrement: (state) => {
                state.value -= 1
            },
            incrementByAmount: (state, action) => {
                state.value += action.payload
            }
        }
    }
)

export const { increment, decrement, incrementByAmount } = counterSlice.actions
export default counterSlice.reducer;