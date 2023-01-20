
import { useSelector } from "react-redux"
import { ADDED_TO_CART, DECREAESE_COUNT_QUANTITY, DELETE_THE_ITEMS, INCREAESE_COUNT_QUANTITY, REMOVED_FROM_CART } from "./Cart.ActionType"





export const AddedToTheCart=(data)=>{
  

    return {
        type:ADDED_TO_CART,
        payload:data
    }
}

export const RemovedFromTheCart=(id)=>{
    const store=useSelector((state)=>state.Cart)
console.log(store,"this is store ofCart")
const filteredData=store.data.filter((el)=>el.id!==id)
    return  {
    type:REMOVED_FROM_CART,
    payload:filteredData

}
}

export const IncreaseQuantity=(id)=>{
    return {
        type:INCREAESE_COUNT_QUANTITY,
        payload:id
    } 
}
export const DecreaseQuantity=(id)=>{
    return {
        type:DECREAESE_COUNT_QUANTITY,
        payload:id
    } 
}

export const DeleteTheItem=(id)=>{
    return {
        type:DELETE_THE_ITEMS,
        payload:id
    }
}
