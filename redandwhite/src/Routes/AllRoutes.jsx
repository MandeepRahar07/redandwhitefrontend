import React from 'react'
import { Routes,Route } from 'react-router-dom'
import { Product } from '../Components/Product'
import Cartpage from '../Components/Cartpage'
function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Product/>}/>
            <Route path="/cart" element={<Cartpage/>}></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes