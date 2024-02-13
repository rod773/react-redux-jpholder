import {
  FETCH_POSTS_STARTED,
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_SUCCESS,
} from "./actionTypes";
import axios from "axios";

export const fetchPosts = () => {
  return (dispatch) => {
    dispatch(fetchPostsStarted());

    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        dispatch(fetchPostsSuccess(res.data));
      })
      .catch((err) => {
        dispatch(fetchPostsFailed(err.message));
      });
  };
};

const fetchPostsStarted = () => {
  return {
    type: FETCH_POSTS_STARTED,
    payload: {
      isLoading: true,
    },
  };
};

const fetchPostsSuccess = (posts) => {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: {
      posts,
    },
  };
};

const fetchPostsFailed = (error) => {
  return {
    type: FETCH_POSTS_FAILURE,
    payload: {
      error,
    },
  };
};
