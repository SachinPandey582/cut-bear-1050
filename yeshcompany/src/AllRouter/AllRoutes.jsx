import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Components/Login/Login'
import Signup from '../Components/Signup/Signup'
import AllProducts from '../Pages/AllProducts'
import Cart from '../Pages/Cart'
import Home from '../Pages/Home'
import SingleProduct from '../Pages/SingleProduct'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/allproducts' element={<AllProducts/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/signup' element={<Signup/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/allproducts/:id' element={<SingleProduct/>}></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes