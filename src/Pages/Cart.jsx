import { Box, Button, Heading } from '@chakra-ui/react'
import axios from 'axios'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CartCard from '../Components/CartCard'
import { AddedToTheCart } from '../Redux/Cart/Cart.Action'
 export const singleDataofCart =(id)=>{
        return function (dispatch){
            
           
            axios.get(`https://abracadabra-4mt6.onrender.com/mobiles/${id}`)
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
let TotalCount=0
for(let i=0;i<store.data.length;i++){
    TotalCount+=store.data[i].Price1 *store.data[i].Quant
}
   




  return (
    <div>

<Link to={"/allproducts"}>
<button>Go Back</button>

</Link>
        <Box margin={"auto"}  w={"90%"}>
            {
                store.data.map((el)=>(
                    <CartCard {...el} key={el.id}/>                )
                )
            }
        </Box>
       <Box>
<Heading>
Total Price:-{TotalCount}

</Heading>
<Link to={"/payment"}>
<Button border={"none"} p="10" bg={"red"}>Proceed To Buy</Button>
</Link>
       </Box>

    </div>
  )
}

export default Cart