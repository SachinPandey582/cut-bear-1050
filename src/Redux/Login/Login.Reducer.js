import { LOGIN_FAILURE, LOGIN_SUCCESS } from "./Login.Action.type"

let initState={
    username:"",
    value:{}
}



export const LoginReducer=(state=initState,action)=>{
if(action.type ===LOGIN_SUCCESS){
    return {
        ...state,
        value:action.payload
    }
}else if(action.type===LOGIN_FAILURE){
    return {
        ...state,
        value:{}
    }
}else{
    return state
}
}