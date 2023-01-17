// import { useSelector } from "react-redux"

import { store } from "../store"
import { USER_LOGIN_FAILED, USER_LOGIN_SUCCESS } from "./Login.actionType"
const check=store.getState()
    console.log(check.signup.data,"this is check signup here ")//
    // console.log(check.login.data,"this is check login here ")
export const login = (data) => async (dispatch) => {
    console.log(data,"this is data i am asking for ")
  if(check.signup.data.email === data.email && check.signup.data.password === data.Password){
    alert("done")
    dispatch({type:USER_LOGIN_SUCCESS,payload:data.email})
   
  }else{
    dispatch({type:USER_LOGIN_FAILED})
   
   alert("plese enter the Correct Credential")
  }
    // console.log(data,"here the data comes")


  

}