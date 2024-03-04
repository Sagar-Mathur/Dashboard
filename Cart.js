// Cart.js
import React from 'react';
import { connect } from 'react-redux';
import Product from './Product';
import { useState } from 'react';
import './cart.css';
import store from './store';

const Cart = ({ cart}) => {
  function hide(){
    document.getElementById('show').style.display='none';
  }
  function product(){
    document.getElementById('addtocart-popup').style.display='none';

  }

  
  
  return (
    <div>
      <h2></h2>
      <table className='product-table' id='show'> 
     
          <tr>
            <th>product</th>
            <th>quantity</th>
            <th>price</th>
          </tr>
            <button id='minimize-btn' onClick={hide}>x</button>
        {cart.map((item) => (
          <tr>
            <td><img id='shop-image' src={item.img} /><span className='product-name'>{item.name}</span></td>
            <td> <span className='product-quantity'><input type='number'  id='input-tag'/></span></td>
            <td ><span className='product-shop-price'>{item.price}</span></td>
          </tr>

        ))}
      </table>
      <h2 id='item'>{cart.length}</h2>
        {cart.map((item)=>(
      <div className='addtocart-popup' id='addtocart-popup'>
        <button onClick={product} >x</button>
          <div>
          <img src={item.img}/>
          <span>{item.name}</span>
          <h2>{item.price}</h2>
          </div>
      </div>
        ))}


    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps)(Cart);
