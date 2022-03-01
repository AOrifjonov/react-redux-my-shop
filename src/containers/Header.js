import React from 'react'
import '../App.css'

export default function Header() {
  return (
    <div className='ui pointing menu' style={{padding: '12px 30px'}}>
        <div className='ui container'>
            <a className='itemShop' href='/'>
                My Shop
            </a>
          <div className='right menu'>
            <div className='ui vertical animated button' tabIndex='0'>
              <div className='hidden content'></div>
              <div className='visible content'>
                <i className='shop icon'></i>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
