import React from 'react'
import {
  BrowserRouter,Routes,Route
} from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import AdminPanel from './pages/AdminPanel/AdminPanel'
import Products from './pages/Products/Products'
import ProductDetail from './pages/PorductDetail/ProductDetail'
function Routerpage() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/admin-panel' element={<AdminPanel />} />
          <Route path='/products' element={<Products />} />
          <Route path='/product-detail' element={<ProductDetail />} />            
      </Routes>
    </BrowserRouter>
  )
}

export default Routerpage