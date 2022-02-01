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
export const deleteProduct = createAsyncThunk(
  "cart/deleteProduct",
  async (data) => {
    return data;
  }
);
export const emptyCheckout = createAsyncThunk(
  "cart/emptyCheckout",
  async (data) => {
    return data;
  }
);

export const totalValue = createAsyncThunk(
  "cart/totalValue",
  async () => {
    return {result:"mani"};
  }
);



const cartSlice = createSlice({
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
    // addTocart: (state, action) => {
    //   console.log(action.payload);
    // },
    // testFunc: (state, action) => {
    //   console.log(state.cartsummary.itemCount);
    // },
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
      console.log(state.cart);
      let pre = action.payload.count - state.cart[action.payload.index].count;
      state.cart[action.payload.index].count = action.payload.count;
      state.cartsummary.itemCount += pre;
    });

    builder.addCase(deleteCartItem.fulfilled, (state, action) => {
      state.cart = state.cart.filter(
        (element, index) => index !== action.payload);
      state.cartsummary.itemCount -= 1;
    });

    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      state.cart = state.cart.filter(
        (element, index) => index !== action.payload.index
      );
      state.cartsummary.itemCount -= action.payload.count;
    });

 
    builder.addCase(totalValue.fulfilled, (state, action) => {
      let total =0;
      for(let val of state.cart){
        total +=(val.price*val.count)
      }
           state.cartsummary.totalAmount=total;
    });
  },
});

// export const { addTocart, testFunc } = cartSlice.actions;


export default cartSlice.reducer;