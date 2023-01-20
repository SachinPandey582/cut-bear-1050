
import axios from "axios"
import { FETCH_USER_FAILED, FETCH_USER_REQUESTED, FETCH_USER_SUCCEEDED, SORTINGFROMHTL, SORTINGFROMLTH } from "./Product.Action.type"

   





export const fetchuserRequested=()=>{
    return {
        type:FETCH_USER_REQUESTED
    }
}

export const fetchuserSuccess=(data)=>{
    return {
        type:FETCH_USER_SUCCEEDED,
        payload:data
    }
}

export const fetchuserFailure=(error)=>{
    return {
        type:FETCH_USER_FAILED,
        payload:error
    }
}
export const sorttheuserpricefromhtl=()=>{

    return{
        type:SORTINGFROMHTL,
    }
}
export const sorttheuserpricefromlth=()=>{
    
    return{
        type:SORTINGFROMLTH,
    }
}


export const fetchUsers =()=>{
    return function (dispatch){
        dispatch(fetchuserRequested())
        axios.get("http://localhost:8080/mobiles")
        .then(response=>{
            let users=response.data
            dispatch(fetchuserSuccess(users))
        }).catch(err=>{
            console.log(err.message)
            dispatch(fetchuserFailure(err.message))
        })
    }
}