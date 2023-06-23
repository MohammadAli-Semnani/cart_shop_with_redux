import { combineReducers } from "redux";
import productReducer from "./prooducts/productsReducer";
import cartReducer from "./carts/cartReducer";

const rootReducer = combineReducers({
    productsState: productReducer,
    cartsState: cartReducer
})

export default rootReducer;