import { React, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { selectedProduct } from '../redux/actions/productAction'

export default function ProductDetails() {
  const product = useSelector(state => state.product)
  const {price, id, category, description, title, image} = product
  const productId = useParams()
  const dispatch = useDispatch()
  const fetchProductDetail = async () => {
    const response = await axios.get(`https://fakestoreapi.com/products/${productId.productId}`)
    dispatch(selectedProduct(response.data))
  }

  useEffect(function () {
    fetchProductDetail()
  });

  return (
    <div className='ui grid container'>
        { Object.keys(product).length === 0 ?
          <div>...Loading</div>
         : 
          <div className='ui placeholder segment'>
            <div className='ui two column stackable center aligned grid'>
              <div className='ui vertical divider'>AND</div>
              <div className='middle aligned row'>
                <div className='column lp'>
                  <img style={{width: '80%'}} src={image} alt={title} />
                </div>
                <div className='column rp'>
                  <h1>{title}</h1>
                  <h2>
                    <p className='ui teal tag label'>${price}</p>
                  </h2>
                  <h3 className='ui brown block header'>{category}</h3>
                  <p>{description}</p>
                  <div className='ui vertical animated button' tabIndex='0'>
                    <Link to={`/add-shop/`+id}>
                      <div className='hidden content'>
                        <i className='shop icon'></i>
                      </div>
                    </Link>
                    <Link to={`/add-shop/${id}`}><div className='visible content'>Add To Card</div></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
    </div>
  )
}
