import axios from 'axios'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CartCard from '../Components/CartCard'
import { AddedToTheCart } from '../Redux/Cart/Cart.Action'
 export const singleDataofCart =(id)=>{
        return function (dispatch){
            
           
            axios.get(`http://localhost:8080/mobiles/${id}`)
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

<Link to={"/allproducts"}>
<button>Go Back</button>

</Link>
        <h1>
            {
                store.data.map((el)=>(
                    <CartCard {...el} key={el.id}/>                )
                )
            }
        </h1>
       
    </div>
  )
}

export default Cart