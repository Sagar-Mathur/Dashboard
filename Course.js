import './Course.css';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Product from './Product';  // Adjust this path
import Cart from './Cart';  // Adjust this path


function Course(){
    function showtohide(){
    }

    return(
        <div>
		<div className="sec2-arrivals">
	        <Provider store={store}> 
          <div className="App">
              <Product />
            
              <div className='show-products' id='showtohide'>
                <Cart/>
              </div >
          </div>
             </Provider>
            <h1 id='cart'></h1>	
		</div>
		 
        </div>
        )
        }


        export default Course;
