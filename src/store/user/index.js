import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  email: "",
  photo: "",
};

const userReducer = createSlice({
  name: "UserSlice",
  initialState,
  reducers: {
    setUserLoginDetails: (state, action) => {
      const { name, email, photo } = action.payload;
      state.username = name;
      state.email = email;
      state.photo = photo;
    },
    setSignOut: (state) => {
      state.username = null;
      state.email = null;
      state.photo = null;
    },
  },
});

export const { setUserLoginDetails, setSignOut } = userReducer.actions;

export const userReducers = userReducer.reducer;
