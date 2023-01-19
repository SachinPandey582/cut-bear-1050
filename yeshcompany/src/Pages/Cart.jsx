import axios from 'axios'
import React from 'react'
import { useSelector } from 'react-redux'
import { AddedToTheCart } from '../Redux/Cart/Cart.Action'
 export const singleDataofCart =()=>{
        return function (dispatch){
            
           
            axios.get("http://localhost:8080/mobiles")
            .then(response=>{
                let users=response.data
                dispatch(AddedToTheCart(users))

            }).catch(err=>{
                console.log(err.message)
               
            })
        }
    }
const Cart = () => {
    const store =useSelector((state)=>state.Cart)
    console.log(store)


   




  return (
    <div>
        <h1>Cart</h1>
    </div>
  )
}

export default Cart