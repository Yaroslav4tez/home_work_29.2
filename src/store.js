import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "count",
    initialState: {value: 0},
     reducers: {
        plus: (state) => { state.value += 1 },
        minus: (state) => { state.value -= 1 },
     }
});

export const { plus, minus } = counterSlice.actions;

export const store =  configureStore({
    reducer: {count: counterSlice.reducer}
});