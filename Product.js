// ProductList.js
import React from 'react';
import './Contact.css'
import { connect } from 'react-redux';
import { addToCart } from './Action00';  // Adjust this path
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo from './eco-wo2.jpg'
import logo1 from './eco-wo4.jpg'
import logo2 from './eco-wo5.jpg'
import logo3 from './eco-western.jpg'
import logo4 from './eco-wo6.jpg'
import logo5 from './eco-wo7.jpg'







const Product = ({ addToCart }) => {
  
  const products = ['Product 1', 'Product 2', 'Product 3','product 4','product 5','product 6'];
const image = [logo,logo1,logo2,logo3,logo4,logo5]; 
 const price=[200,100,400,1000,700,1200];
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode:true,
  showArrow:true

  
};
const handleAdd = (product, index) => {
  
  const productDetails = {
    name: product,
    img: image[index],
    price: price[index],
  };
  addToCart(productDetails);
 
};


  

  return (
    <div className='product' id='product'>
      <h2  className='headline'>Product</h2>
      
      
      <Slider {...settings}> 
        {products.map((product, index) => (
          <div className='container1' key={index}>
            {product}{index}{' '}

            <img className='product-image' src={image[index]}/>
            <h1 className='price-tag'>${price[index]}</h1>
            <br></br>
            <button className='product-btn' onClick={() => handleAdd(product,index)}>Add to Cart </button>
            
            </div>
        ))}
      
        </Slider>
        
    
     
    </div>
  );
        }

export default connect(null, { addToCart })(Product);

    </div>
  );
};

export default connect(null, { addToCart })(Product);
