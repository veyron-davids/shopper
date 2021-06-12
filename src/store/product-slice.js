import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  ADD_CART,
  FETCH_CATEGORY,
  FETCH_COUPLES,
  FETCH_SCRIPTURES,
  FETCH_DEALS,
  FETCH_VOGUE,
  FETCH_BEST,
  GET_CART,
  FETCH_LADIES,
  FETCH_MEN,
  PRODUCTS_SERVER,
  UPDATE_CART,
} from "../config";
import http from "../services/httpService";

const initialState = {
  products: [],
  deals: [],
  men: [],
  ladies: [],
  vogue: [],
  scriptures: [],
  bestSellers: [],
  recommended: [],
  couples: [],
  cart: [],
  loading: false,
  success: false,
  total: 0,
  cartCount: 0,
};
//PRODUCTS//

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await http.get(PRODUCTS_SERVER);
    return response.data.products;
  }
);

export const fetchCart = createAsyncThunk("products/fetchCart", async () => {
  const response = await http.get(GET_CART);
  return response.data[0].cart.items;
});

export const addToCart = createAsyncThunk(
  "products/addToCart",
  async (productId) => {
    const prodId = {
      prod: productId,
    };
    const response = await http.post(ADD_CART, prodId);

    return response.data.cart.items;
  }
);

export const postCartUpdate = createAsyncThunk(
  "products/update",
  async (data) => {
    const response = await http.post(UPDATE_CART, data);

    return response.data.cart.items;
  }
);

//CATEGORIES SLICE//
export const fetchDeals = createAsyncThunk("deals/fetchDeals", async () => {
  const response = await http.get(FETCH_DEALS);
  console.log(response);
  return response.data.deals;
});
export const fetchMen = createAsyncThunk("men/fetchMen", async () => {
  const response = await http.get(FETCH_MEN);
  return response.data.men;
});
export const fetchLadies = createAsyncThunk("ladies/fetchLadies", async () => {
  const response = await http.get(FETCH_LADIES);
  return response.data.ladies;
});
export const fetchVogue = createAsyncThunk("vogue/fetchVogue", async () => {
  const response = await http.get(FETCH_VOGUE);
  return response.data.vogue;
});
export const fetchScriptures = createAsyncThunk(
  "scriptures/fetchScriptures",
  async () => {
    const response = await http.get(FETCH_SCRIPTURES);
    console.log(response);
    return response.data.scriptures;
  }
);
export const fetchBest = createAsyncThunk("bestSellers/fetchBest", async () => {
  const response = await http.get(FETCH_BEST);
  return response.data.best;
});
export const fetchCouples = createAsyncThunk("couples/fetchCouples", async () => {
  const response = await http.get(FETCH_COUPLES);
  
  return response.data.couples;
});


const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getCartTotal(state, action) {
      state.cart.map((ctx) => {
        state.total =
          Number(ctx.productId.price) * Number(ctx.quantity) + state.total;
      });
    },
  },
  extraReducers: {
    [fetchProducts.fulfilled]: (state, action) => {
      state.products = action.payload;
    },
    [fetchDeals.fulfilled]: (state, action) => {
      state.deals = action.payload;
    },
    [fetchBest.fulfilled]: (state, action) => {
      state.bestSellers = action.payload;
    },
    [fetchCouples.fulfilled]: (state, action) => {
      state.couples = action.payload;
    },
    [fetchLadies.fulfilled]: (state, action) => {
      state.ladies = action.payload;
    },
    [fetchMen.fulfilled]: (state, action) => {
      state.men = action.payload;
    },
    [fetchScriptures.fulfilled]: (state, action) => {
      state.scriptures = action.payload;
    },
    [fetchVogue.fulfilled]: (state, action) => {
      state.vogue = action.payload;
    },
    [addToCart.pending]: (state, action) => {
      state.loading = true;
    },
    [addToCart.fulfilled]: (state, action) => {
      state.cartCount = 0;
      state.cart = action.payload;
      state.cart.map((item) => {
        state.cartCount = Number(state.cartCount) + Number(item.quantity);
      });

      state.loading = false;
    },
    [addToCart.rejected]: (state, action) => {
      // state.loading = false;
      state.success = false;
    },
    [fetchCart.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchCart.fulfilled]: (state, action) => {
      state.cartCount = 0;
      state.cart = action.payload;
      state.cart.map((item) => {
        state.cartCount = Number(state.cartCount) + Number(item.quantity);
      });
      state.loading = false;
    },
    [fetchCart.rejected]: (state, action) => {
      state.loading = false;
    },
    [postCartUpdate.pending]: (state, action) => {
      state.fetching = true;
    },
    [postCartUpdate.fulfilled]: (state, action) => {
      state.cartCount = 0;
      state.cart = action.payload;
      state.cart.map((item) => {
        state.cartCount = Number(state.cartCount) + Number(item.quantity);
      });
      state.fetching = false;
    },
    [postCartUpdate.rejected]: (state, action) => {
      state.fetching = false;
    },
  },
});

export const { getCartTotal } = productSlice.actions;

export default productSlice.reducer;

export const selectAllProducts = (state) => state.products.products;
export const selectAllDeals = (state) => state.products.deals;
export const selectAllMen = (state) => state.products.men;
export const selectAllLadies = (state) => state.products.ladies;
export const selectAllScriptures = (state) => state.products.scriptures;
export const selectAllVogue = (state) => state.products.vogue;
export const selectAllBest = (state) => state.products.bestSellers;
export const selectAllCouples = (state) => state.products.couples;

export const selectCart = (state) => state.products.cart;
export const selectLoading = (state) => state.products.loading;
export const selectFetch = (state) => state.products.fetching;
export const selectSuccess = (state) => state.products.success;
export const selectCount = (state) => state.products.cartCount;
export const selectTotal = (state) => state.products.total;
