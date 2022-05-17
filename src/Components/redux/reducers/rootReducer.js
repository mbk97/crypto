import { combineReducers } from "redux";
import { marketUpdateReducer } from "./marketUpdateReducer";
import { newsReducer } from "./newsReducer";
import { coinTrendReducer } from "./trendReducer";

export const rootReducer = combineReducers({
  trend: coinTrendReducer,
  marketUpdate: marketUpdateReducer,
  news: newsReducer,
});
