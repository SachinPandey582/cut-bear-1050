import { SIGN_FAILURE, SIGN_SUCCESS } from "./Signup.actionType";

const initState = {
    isSignup: false,
    isError: false,
    data: "hi"
  };
  
  const signupReducer = (state = initState, { type, payload }) => {
    switch (type) {
      case SIGN_SUCCESS: {
        return {
          ...state,
          isSignup: true,
          data: payload
        };
      }
      case SIGN_FAILURE: {
        return {
          ...state,
          isError: true
        };
      }
      default:
        return state;
    }
  };
  
  export default signupReducer;
  
  