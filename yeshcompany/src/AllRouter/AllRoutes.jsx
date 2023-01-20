import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Components/Login/Login'
import Signup from '../Components/Signup/Signup'
import Admin from '../Pages/Admin'
import AllProducts from '../Pages/AllProducts'
import Bekar from '../Pages/bekar'
import Cart from '../Pages/Cart'
import Home from '../Pages/Home'
import PrivateRoute from '../Pages/PrivateRoute'
import SingleProduct from '../Pages/SingleProduct'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/allproducts' element={<AllProducts/>}></Route>
            <Route path='/login' element={
            <ChakraProvider>
            <Login/>
            </ChakraProvider>
            }></Route>
            <Route path='/signup' element={
              <ChakraProvider>
              <Signup/>
              </ChakraProvider>
            }></Route>
            <Route path='/cart' element={
            // <PrivateRoute>
            <Cart/>
            /* </PrivateRoute> */
            }
            ></Route>
            <Route path='/allproducts/:id' element={<SingleProduct/>}></Route>
            <Route path='/bekar' element={<Bekar/>}></Route>
            <Route path='/admin' element={<Admin/>}></Route>

            <Route path="/:kljsdhnfs" element={<Bekar/>} />
        </Routes>
    </div>
  )
}

export default AllRoutes