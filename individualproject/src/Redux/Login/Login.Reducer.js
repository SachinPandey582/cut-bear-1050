import { USER_LOGIN_FAILED, USER_LOGIN_SUCCESS } from "./Login.actionType"

const initState={
    user: {
        userStatus: false,
        username: null,
        isError: false,      
      }
}



export const loginReducer = (state = initState, { type, payload }) => {
switch(type){
    case USER_LOGIN_SUCCESS :{
        return {
            ...state,
            user: {
                userStatus: true,
                username: payload,
                isError: false,      
              }
        }
    }
    case USER_LOGIN_FAILED :{
        return {
            ...state,
            user: {
                userStatus: false,
                username: "",
                isError: false,      
              } 
        }
    }
    
    default:{
        return state
    }
}
}