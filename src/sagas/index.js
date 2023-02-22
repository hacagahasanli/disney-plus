import { call, put, takeLatest } from 'redux-saga/effects';
import {
    FETCH_POSTS_REQUEST,
    fetchPostsSuccess,
    fetchPostsFailure,
    CREATE_POST_REQUEST,
    createPostSuccess,
    createPostFailure,
} from '../redux/actions';

import * as api from '../api';

function* fetchPosts() {
    try {
        const posts = yield call(api.fetchPosts);
        yield put(fetchPostsSuccess(posts));
    } catch (error) {
        yield put(fetchPostsFailure(error));
    }
}

function* createPost(action) {
    try {
        const post = yield call(api.createPost, action.payload);
        yield put(createPostSuccess(post));
    } catch (error) {
        yield put(createPostFailure(error));
    }
}

function* rootSaga() {
    yield takeLatest(FETCH_POSTS_REQUEST, fetchPosts);
    yield takeLatest(CREATE_POST_REQUEST, createPost);
}

export default rootSaga;


// import { takeLatest, call, put } from "redux-saga/effects";
// import axios from "axios";

// function* fetchElements() {
//     try {
//         const response = yield call(axios.get, "https://jsonplaceholder.typicode.com/posts");
//         yield put({ type: "FETCH_ELEMENTS_SUCCESS", payload: response.data });
//     } catch (error) {
//         yield put({ type: "FETCH_ELEMENTS_ERROR", payload: error });
//     }
// }

// function* postElement(action) {
//     try {
//         const response = yield call(axios.post, "https://jsonplaceholder.typicode.com/posts", action.payload);
//         yield put({ type: "POST_ELEMENT_SUCCESS", payload: response.data });
//     } catch (error) {
//         yield put({ type: "POST_ELEMENT_ERROR", payload: error });
//     }
// }

// function* rootSaga() {
//     yield takeLatest("FETCH_ELEMENTS_REQUEST", fetchElements);
//     yield takeLatest("POST_ELEMENT_REQUEST", postElement);
// }

// export default rootSaga;