import React from 'react'
import { useDispatch } from 'react-redux'
import ProductComponents from './ProductComponents'
import axios from 'axios'
import { useEffect } from 'react'
import { setProduct } from '../redux/actions/productAction'


export default function ProductList() {
  const dispatch  = useDispatch()

  const fetchProducts = async () => {
    const response = await axios.get('https://fakestoreapi.com/products')
    .catch(e => console.log('Xato: ' + e.message));
    dispatch(setProduct(response.data))
  }

  useEffect(()=> {
    fetchProducts()
  })

  return (
    <div className='ui grid container' style={{marginTop: '2rem'}}>
        <ProductComponents />
    </div>
  )
}
