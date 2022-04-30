import { trendCoinTypes } from "../actions/actionTypes";
const initialState = {
  trendCoin: [],
};

export const coinTrendReducer = (state = initialState, action) => {
  switch (action.type) {
    case trendCoinTypes.FETCH_COIN_SUCCESS:
      return {
        ...state,
        trendCoin: action.payload,
      };
    default:
      return state;
  }
};
