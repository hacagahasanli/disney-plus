import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: {
    recommend: [],
    new: [],
    original: [],
    trending: [],
  },
};

const movieReducer = createSlice({
  name: "movieReducer",
  initialState,
  reducers: {
    setMovies(state, action) {
      const movies = action.payload;
      movies.map((doc) => {
        return (state.movies[doc.data().type] = [
          ...state.movies[doc.data().type],
          { id: doc.id, ...doc.data() },
        ]);
      });
    },
  },
});

export const movieReducers = movieReducer.reducer;
export const { setMovies } = movieReducer.actions;
