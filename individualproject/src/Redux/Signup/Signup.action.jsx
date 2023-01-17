

import { SIGN_SUCCESS } from "./Signup.actionType"

export const signup =(creds)=>async (dispatch)=>{

  console.log(creds,"this is Cred i reQuired")
  const {FirstName,LastName}=creds
  
  
    dispatch({type:SIGN_SUCCESS,payload:creds})
alert(`You have created your Account with the name ${FirstName} ${LastName}`)

}

// try{
//   let res=await axios.post(`https://reqres.in/api/login`,{email:email,password:password})
//   dispatch({type:SIGN_SUCCESS,payload:res.data})
// alert(`You have created your Account with the name ${FirstName} ${LastName}`)

// }catch(err){
//   dispatch({type: SIGN_FAILURE})
//   alert("this is wrong Credential ")
// }