import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  currentUser: null, // No logged-in user initially
};

// User slice
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      // Update the state
      return { ...state, currentUser: action.payload };
    },
  },
});

// Reducer and actions
export const userReducer = userSlice.reducer;
export const { setCurrentUser } = userSlice.actions;

// Selector
export const selectCurrentUser = (state) => state.user.currentUser;
