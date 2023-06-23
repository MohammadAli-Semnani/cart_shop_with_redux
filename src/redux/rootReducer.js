import { combineReducers } from "redux";
import productReducer from "./prooducts/productsReducer";

const rootReducer = combineReducers({
    productsState: productReducer,
})

export default rootReducer;