import { combineReducers } from "redux";
import { marketUpdateReducer } from "./marketUpdateReducer";
import { coinTrendReducer } from "./trendReducer";

export const rootReducer = combineReducers({
  trend: coinTrendReducer,
  marketUpdate: marketUpdateReducer,
});
