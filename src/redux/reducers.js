import {
    FETCH_POSTS_REQUEST,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_FAILURE,
    CREATE_POST_REQUEST,
    CREATE_POST_SUCCESS,
    CREATE_POST_FAILURE,
  } from './actions';
  
  const initialState = {
    posts: [],
    loading: false,
    error: null,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_POSTS_REQUEST:
      case CREATE_POST_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_POSTS_SUCCESS:
        return {
          ...state,
          posts: action.payload,
          loading: false,
          error: null,
        };
      case CREATE_POST_SUCCESS:
        return {
          ...state,
          posts: [action.payload, ...state.posts],
          loading: false,
          error: null,
        };
      case FETCH_POSTS_FAILURE:
      case CREATE_POST_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  