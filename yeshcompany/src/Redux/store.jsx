import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { CartReducer } from "./Cart/Cart.Reducer";

import { ProductReducer } from "./Products/Product.Reducer";
import { SigninReducer } from "./Signin/Signin.reducer";
const rootReducer=combineReducers({
    products:ProductReducer ,
    signin:SigninReducer,
    Cart:CartReducer
})
export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))
