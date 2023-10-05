import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { PROMOTIONS } from '../../app/shared/PROMOTIONS';
import { baseUrl } from "../baseUrl";
import { mapImageURL } from "../../../utils/mapImageURL";

// Create fetchPromotions using createAsyncThunk
export const fetchPromotions = createAsyncThunk(
  "promotions/fetchPromotions",
  async () => {
    const response = await fetch(baseUrl + "promotions");
    if (!response.ok) {
      return Promise.reject("Unable to fetch, status: " + response.status);
    }
    const data = await response.json();
    return data;
  }
);

// Update the initialState
const initialState = {
  promotionsArray: [],
  isLoading: true,
  errMsg: "",
};

// Create promotionsSlice
const promotionsSlice = createSlice({
  name: "promotions",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPromotions.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchPromotions.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.errMsg = "";
      state.promotionsArray = mapImageURL(action.payload);
    },
    [fetchPromotions.rejected]: (state, action) => {
      state.isLoading = false;
      state.errMsg = action.error ? action.error.message : "Fetch failed";
    },
  },
});

// Add your selector here
export const selectFeaturedPromotion = (state) => {
  return state.promotions.promotionsArray.find((promotion) => promotion.featured);
};

export default promotionsSlice.reducer;
