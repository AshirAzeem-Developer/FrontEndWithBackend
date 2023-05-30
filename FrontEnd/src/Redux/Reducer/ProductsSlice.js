import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
    name: "Products",
    initialState: [],
    reducers: {
        add(state, actions) {
            state.push(actions.payload)
        },
        del(state, actions) { },
    },
});

export const { add, del } = ProductSlice.actions;
export default ProductSlice.reducer;