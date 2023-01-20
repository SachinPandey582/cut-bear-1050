import { USER_SIGNIN_SUCCESS } from "./Signin.actionType"

const initState1={
    loading:false,
    data1:{},
   
}

export const SigninReducer = (state = initState1, action) => {
    switch (action.type) {
      case USER_SIGNIN_SUCCESS:
        return {
          ...state,
          loading: false,
          data1:action.payload
        }

          
      default: {
        return state;
      }
    }
  };