import { newsTypes } from "../actions/actionTypes";

const initialState = {
  newsResult: [],
};

export const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case newsTypes.FETCH_NEWS_SUCCESS:
      return {
        ...state,
        newsResult: action.payload,
      };
    default:
      return state;
  }
};
