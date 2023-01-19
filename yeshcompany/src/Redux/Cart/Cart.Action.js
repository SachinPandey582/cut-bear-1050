
import { useSelector } from "react-redux"
import { ADDED_TO_CART, REMOVED_FROM_CART } from "./Cart.ActionType"





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


