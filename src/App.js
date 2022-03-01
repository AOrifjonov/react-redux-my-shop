import React from 'react'
import Header from './containers/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductList from './containers/ProductList'
import ProductDetails from './containers/ProductDetails'
import AddToMyShop from './containers/AddToMyShop'

export default function App() {
  return (
    <>
    <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ProductList />} />
          <Route path='/product/:productId' element={<ProductDetails />} />
          <Route path='*' element={<h1 align='center'>404 not found</h1>} />
          <Route path='/add-shop/:productId' element={<AddToMyShop />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
