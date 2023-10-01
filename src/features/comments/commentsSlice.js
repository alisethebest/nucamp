import { createSlice } from "@reduxjs/toolkit";
import { COMMENTS } from "../../app/shared/COMMENTS";

// Initial state
const initialState = {
  commentsArray: COMMENTS,
};

// Create slice
const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    // Add the addComment reducer
    addComment: (state, action) => {
      // Debugging console logs
      console.log("addComment action.payload:", action.payload);
      console.log("addComment state.commentsArray:", state.commentsArray);

      // Create new comment object
      const newComment = {
        id: state.commentsArray.length + 1, // Assign new id
        ...action.payload, // Spread in the action payload
      };

      // Push new comment to commentsArray
      state.commentsArray.push(newComment);
    },
  },
});

// Export the reducer
export const commentsReducer = commentsSlice.reducer;

// Destructure and export the addComment action creator
export const { addComment } = commentsSlice.actions;

// Selector to get comments by campsite id
export const selectCommentsByCampsiteId = (campsiteId) => (state) => {
  return state.comments.commentsArray.filter(
    (comment) => comment.campsiteId === parseInt(campsiteId)
  );
};
