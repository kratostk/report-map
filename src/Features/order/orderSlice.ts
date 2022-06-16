import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IOrder {
    num: number;
}

const initialState: IOrder = {
    num: 0,
};

const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        added: (state: IOrder, action: PayloadAction<number>) => {
            state.num = state.num + action.payload;
        },
    },
});

export default orderSlice.reducer;
export const { added } = orderSlice.actions;