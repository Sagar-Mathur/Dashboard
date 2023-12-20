import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Home from './Home';
import Contact from './Contact';
import E404 from './E404';
import User from './User';
import './App.css';

function Sidenavbar(){
    return(
        <div>
            <div class="side-bar">
	  	<div class="logo">
	  		
	  	    <h2>Admin</h2>
	  	    <p>Page</p>
	  	</div> 
	    <div class="items">	
		  <ul>
			<li >Dashboard</li>
			<li >Profile</li>
			<li >Sign In</li>
			<li >Sign Up</li>
			<li >Blank</li>
			<p>Term & Condition</p>
			<li >Buttons</li>
			<li >Forms</li>
			<li >Cards</li>
			<li >Typography</li>
			<li >Icon</li>
			<p>Plugin & Addons</p>
			<li >Charts</li>
			<li >Maps</li>
			
			
			
			
		  </ul>
		</div>  
      </div>
	
        </div>
    )
}