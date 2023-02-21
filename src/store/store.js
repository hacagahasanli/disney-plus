import { configureStore } from "@reduxjs/toolkit";
import { userReducers } from "./user";
import { movieReducers } from "./movie";

export default configureStore({
  reducer: {
    user: userReducers,
    movie: movieReducers,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
