import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


export default function ProductComponents() {
  const products = useSelector(state => state.allProducts.product)
  const renderList = products.map((product) => {
    const {title, price, category, image, id} = product
    return (
      <div className='four wide column' key={id}>
        <Link to={`/product/${id}`}>
          <div className='ui link cards'>
            <div className='card' style={{height: 550}}>
              <div className='image'><img style={{width: 280, height: 350}} src={image} alt={title} /></div>
              <div className='content'>
                <div className='header'>{title}</div>
                <div className='meta price'>${price}</div>
                <div className='meta'>{category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    )
  })
  return (
    <>
      {
        renderList
      }
    </>
  )
}
