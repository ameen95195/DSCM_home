import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  drugs: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.drugs.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.drugs.push(action.payload);
      }
    },
    removeItem: (state,action) => {
      console.log(action)
      state.drugs=state.drugs.filter(item=>item.id != action.payload)
    },
    resetCart: (state) => {
      state.drugs = []
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart,removeItem,resetCart } = cartSlice.actions;

export default cartSlice.reducer;
