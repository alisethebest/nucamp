import { createSlice } from "@reduxjs/toolkit";
import { CAMPSITES } from "../../app/shared/CAMPSITES"; // Make sure to replace with your actual import

// Initial state
const initialState = {
  campsitesArray: CAMPSITES,
};

// Create slice
const campsitesSlice = createSlice({
  name: "campsites",
  initialState,
  reducers: {
    // Add your reducer logic here if needed
  },
});

// Export reducer
export const campsitesReducer = campsitesSlice.reducer;

// Selector functions
export const selectAllCampsites = (state) => {
  return state.campsites.campsitesArray;
};

export const selectFeaturedCampsite = (state) => {
  return state.campsites.campsitesArray.find((campsite) => campsite.featured);
};

// Using a closure to make both the ID and state available
export const selectCampsiteById = (id) => (state) => {
  return state.campsites.campsitesArray.find(
    (campsite) => campsite.id === parseInt(id)
  );
};
