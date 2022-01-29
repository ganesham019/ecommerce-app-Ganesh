import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const productAdd = createAsyncThunk("cart/productAdd", async (data) => {
  return data;
});

export const modifyCartItemCount = createAsyncThunk(
  "cart/modifyCartItemCount",
  async (data) => {
    return data;
  }
);

export const deleteCartItem = createAsyncThunk(
  "cart/deleteCartItem",
  async (data) => {
    return data;
  }
);



const cartSclice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    cartsummary: {
      totalAmount: 0,
      itemCount: 0,
      category: "category",
      price: "price",
    },
  },
  reducer: {
    addTocart: (state, action) => {
      console.log(action.payload);
    },
    testFunc: (state, action) => {
      console.log(state.cartsummary.itemCount);
    },
  },
  extraReducers: (builder) => {


    builder.addCase(productAdd.fulfilled, (state, action) => {
      console.log(action.payload);
      state.cart.push({
        pid: action.payload.pid,
        count: action.payload.count,
        image: action.payload.image,
        category: action.payload.category,
        price: action.payload.price,
      });
      state.cartsummary.itemCount += action.payload.count;
    });
 

    builder.addCase(modifyCartItemCount.fulfilled, (state, action) => {
      console.log(action.payload);
      let pre = action.payload.count - state.cart[action.payload.index].count;
      state.cart[action.payload.index].count = action.payload.count;
      state.cartsummary.itemCount += pre;
    });

    builder.addCase(deleteCartItem.fulfilled, (state, action) => {
      state.cart = state.cart.filter(
        (element, index) => index < action.payload
      );
      state.cartsummary.itemCount -= 1;
    });

    
  
  },
});

export const { addTocart, testFunc } = cartSclice.actions;

export default cartSclice.reducer;
