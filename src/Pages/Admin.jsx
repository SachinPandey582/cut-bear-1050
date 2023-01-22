import React from 'react'
import { useSelector } from 'react-redux'

const Admin = () => {
    const store1=useSelector((state)=>state.products)
    console.log(store1)
    const store2=useSelector((state)=>state.signin)
    const store3=useSelector((state)=>state.Cart)
    const store4=useSelector((state)=>state.Login)
  return (
    <div>
        <h1>ADMIN SECTION</h1>
        
        <div>
        <div>
            {store1.data.map((el)=>(
<li key={el.id}>{el.id}</li>
            ))}
        </div>
        <div></div>
        <div></div>
        <div></div>
        </div>
    </div>
  )
}

export default Admin