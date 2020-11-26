import { createWrapper} from "next-redux-wrapper";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { ADD_NEW_POSTS_SUCCESS, FETCH_SUCCESS_POST } from "./types";

export const initialState = {
  post: [],
  error: false,
};
const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUCCESS_POST:
      return {
        ...state,
        post: action.payload,
      };

    case ADD_NEW_POSTS_SUCCESS:
      return {
        ...state,
        post: [
          ...state.post,
          {
            id: Date.now(),
            title: action.title,
            shortInfo: action.title,
            description: action.description,
          },
        ],
      };
    default:
      return state;
  }
};

const makeStore = (context) =>
  createStore(
    postReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  );

// export an assembled wrapper
export const wrapper = createWrapper(makeStore, { debug: true });
export default postReducer;
