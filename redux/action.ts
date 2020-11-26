import { ADD_NEW_POSTS_SUCCESS, FETCH_SUCCESS_POST } from "./types";
import axios from "axios";
export const fetchSuccessPosts = (data) => ({
  type: FETCH_SUCCESS_POST,
  payload: data,
});
export const fetchPosts = () => (dispatch) => {
  fetch(`${process.env.API_URL}/posts`)
    .then((res) => res.json())
    .then((res) => dispatch(fetchSuccessPosts(res)));
};
export const AddNewPostSuccess = (title, description) => ({
  type: ADD_NEW_POSTS_SUCCESS,
  title: title,
  shortInfo: description,
  description: description,
});
export const AddNewPost = (title, description) => (dispatch) => {
  fetch(`${process.env.API_URL}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      title: title,
      shortInfo: description.slice(0,100),
      description: description,
    }),
  }).then(() => dispatch(AddNewPostSuccess(title, description)));
};
