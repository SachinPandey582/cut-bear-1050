import { USER_SIGNIN_SUCCESS } from "./Signin.actionType"



export const SigninCompany =(data)=>{
    console.log(data, "this is i get in actiontype");
return {
    type:USER_SIGNIN_SUCCESS,
    payload:data
}
}