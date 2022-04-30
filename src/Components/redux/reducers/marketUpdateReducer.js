import { marketUpdateTypes } from "../actions/actionTypes";

const initialState = {
  marketUpdateData: [],
};

export const marketUpdateReducer = (state = initialState, action) => {
  switch (action.type) {
    case marketUpdateTypes.FETCH_UPDATE_SUCCESS:
      return {
        ...state,
        marketUpdateData: action.payload,
      };
    default:
      return state;
  }
};
