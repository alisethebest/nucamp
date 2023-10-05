import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { campsitesReducer } from "../features/campsites/campsitesSlice";
import { commentsReducer } from "../features/comments/commentsSlice";
import partnersReducer from "../features/partners/partnersSlice"; // Note the change here
import { promotionsReducer } from "../features/promotions/promotionsSlice";
import { userReducer } from "../features/user/userSlice";

export const store = configureStore({
  reducer: {
    campsites: campsitesReducer,
    comments: commentsReducer,
    partners: partnersReducer, // This should match with what you've exported in partnersSlice.js
    promotions: promotionsReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger]),
});
