import { combineReducers } from "redux";
import cartModalReducer from "./cartModalReducer";
import cartReducer from "./cartReducer";

const reducers = combineReducers({
  cartReducer,
  cartModalReducer,
});
export default reducers;
