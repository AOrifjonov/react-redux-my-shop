import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { addProduct } from '../redux/actions/productAction'
import './AddToCard.css'

export default function AddToMyShop() {
  const productId = useParams()
  const product = useSelector(state => state.product)
  const { image, title, description, id } = product
  const dispatch = useDispatch()

  const fetchAddToMyShop = async () => {
    const response = await axios.get(`https://fakestoreapi.com/products/${productId.productId}`)
      .catch(e => console.log("Error: ", e.message))
    dispatch(addProduct(response.data))
  }

  useEffect(() => {
    fetchAddToMyShop();
  })

  return (
    <div>
      <div className="card">
        <div className="card__title">
          <h3>New products</h3>
        </div>
        <div className="card__body">
          <div className="half">
            <div className="image">
              <img src={image} alt="" />
            </div>
          </div>
          <div className="half">
            <div className="featured_text">
              <p className="sub">{title}</p>
            </div>
            <div className="description">
              <p>{description}</p>
            </div>

          </div>
        </div>
        <div className="card__footer">
          <div className="recommend">
            <Link to={`/product/${id}`}>
              <div className='icon'>
                <i className="backward icon"></i>
                Back
              </div>
            </Link>
          </div>
          <div className="action">
            <button type="button">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}
