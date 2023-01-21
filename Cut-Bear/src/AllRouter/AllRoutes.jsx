import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Components/Login/Login'
import Payment1 from '../Components/Payment1'
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
            <Route path='/' element={
              <ChakraProvider>
            <Home/>
              </ChakraProvider>
            }></Route>
            <Route path='/allproducts' element={
<ChakraProvider>
  <AllProducts/>
</ChakraProvider>

            }></Route>
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
         
                        <Cart/>
        
          
            }
            ></Route>
            <Route path='/allproducts/:id' element={<SingleProduct/>}></Route>
            <Route path='/bekar' element={<Bekar/>}></Route>
            <Route path='/admin' element={<Admin/>}></Route>

            <Route path="/payment" element={
            <ChakraProvider>
            <Payment1/>
            </ChakraProvider>
            
            } />
            <Route path="/:kljsdhnfs" element={<Bekar/>} />

        </Routes>
    </div>
  )
}

export default AllRoutes