import { LOGIN_FAILURE, LOGIN_SUCCESS } from "./Login.Action.type"

export const LoginSuccess=(data)=>{
    return {
        type:LOGIN_SUCCESS,
    payload:data
    //this data must be object which contain the email and password and FirstName
    }
}

export const LoginFailure=()=>{
    return {
        type:LOGIN_FAILURE
    }
}