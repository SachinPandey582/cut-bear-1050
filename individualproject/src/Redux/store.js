import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { loginReducer } from "./Login/Login.Reducer";
import signupReducer from "./Signup/Signup.reducer";

const rootReducer=combineReducers({
    signup:signupReducer,
    login:loginReducer
})


const composerEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store=legacy_createStore(rootReducer,composerEnhancer(applyMiddleware(thunk)))