
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Contact from './Contact';
import E404 from './E404';
import User from './User';
import Nav from './Nav';
import Navbar from './Navbar';

import './App.css';

function Home() {
  return (
    <div>
      
      <div className='full-content'>
	   
  

    <div class="content">
    <h1 class="header">Analytics<span> Dashboard</span> </h1>

    	<div class="box">
    		<div class="small-box1">
    			<div class="inner-con1">
    			  <p>Sale</p>
    			  <h1>2.382</h1>
    			  <p><span>-3.05%</span> Since last week</p>
    			  <button class="btn1">&#xf500;</button>
    			</div>  
    		</div>
    		<div class="small-box2">
                <div class="inner-con2">
    			  <p>Earning</p>
    			  <h1>$21.300</h1>
    			  <p><span>6.65%</span> Since last week </p>
    			  <button class="btn2">$</button>

    			</div>  
    		</div>
    	
    		<div class="small-box3">
    			<div class="inner-con3">
                   <p>Visitors</p>
    			   <h1>14.212</h1>
    			   <p><span>5.25%</span> Since last week</p>
    			   <button class="btn3">&#xf500;</button>
    			</div>     
    	    </div>
    		<div class="small-box4">
    			<div class="inner-con4">
    			   <p>Order</p>
    			   <h1>64</h1>
    			   <p><span>-2.25%</span> Since last week</p>
    			   <button class="btn4">&#xf07a;</button>
    			</div>   
    		</div>
    	</div>
    	<div class="graph">
    		<h2>Recent Movement</h2>
    		<img src="graph2.jpg"/>
    		<ul class="list">
    			<li>4000</li>
    			<li>3000</li>
    			<li>2000</li>
    			<li>1000</li>
    		</ul>
    		<ul class="list2">
    			<li>Jan</li>
    			<li>Feb</li>
    			<li>Mar</li>
    			<li>Apr</li>
    			<li>May</li>
    			<li>Jun</li>
    			<li>July</li>
    			<li>Aug</li>
    			<li>Sep</li>
    			<li>Oct</li>
    			<li>Nov</li>
    			<li>Dec</li>
    		</ul>
    </div>
    <div class="sec-row">	
    	<div class="calender">
    		<p>Calender</p>
    		<h3> <span>August  </span>2023  </h3>
    		<table>
    			<tr>
    			  <th>Sun</th>
    			  <th>Mon</th>
    			  <th>Tue</th>
    			  <th>Wed</th>
    			  <th>Thu</th>
    			  <th>Fri</th>
    			  <th>Sat </th>
    			</tr>
    			<tr>
    				<td>30</td>
    				<td>31</td>
    				<td>1</td>
    				<td>2</td>
    				<td>3</td>
    				<td>4</td>
    				<td>5</td>

    			</tr> 
    			<tr>
    				<td>6</td>
    				<td>7</td>
    				<td>8</td>
    				<td>9</td>
    				<td>10</td>
    				<td>11</td>
    				<td>12</td>

    			</tr>  
    			<tr>
    				<td>13</td>
    				<td>14</td>
    				<td>15</td>
    				<td class="highlight">16</td>
    				<td>17</td>
    				<td>18</td>
    				<td>19</td>

    			</tr>  
    			<tr>
    				<td>20</td>
    				<td>21</td>
    				<td>22</td>
    				<td>23</td>
    				<td>24</td>
    				<td>25</td>
    				<td>26</td>

    			</tr>
    			<tr>
    				<td>27</td>
    				<td>28</td>
    				<td>29</td>
    				<td>30</td>
    				<td>31</td>
    				<td>1</td>
    				<td>2</td>
    				

    			</tr>      
    		</table>
    		
    	</div>
    	<div class="map">
    	
    		<img src="map2.png"/>
    		<h4>Real-time</h4>
    	</div>
    	<div class="circle-graph">
    		<text class="top">Browser Usage</text>
    	   <div class="values">
    	   	<img src="circleg.png"/>
    		 <p>Chrome 4306</p>
    		 <p>Firebox 3801</p>
    		 <p>IE 1689</p>
           </div>
    	</div>
    </div>	
    </div>
   </div> 
 </div>  
  );
}


export default Home;