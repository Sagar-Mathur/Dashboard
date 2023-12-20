import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Home from './Home';
import Contact from './Contact';
import E404 from './E404';
import User from './User';
import './App.css';
import Params1 from './Params1';
  
  
function Nav() {
  function open(){
    document.getElementById('logo').style.display="block";
    document.getElementById('main').style.marginLeft="-15px";

     }
     function closenav(){
       document.getElementById('logo').style.display="none";
       document.getElementById('main').style.marginLeft="-15px";
      
      
     }
   return (
   <div id='sidenav'>
    <div className="side-bar">
    <img id='main' onClick={open} className="menu" src="menus.png"/>
  
    <div className="logo" id='logo'>
        <h2>Admin</h2>
        <a className='cross' onClick={closenav}  href='javascript:void(0)'>&times;</a>
      <img className='photo-sidenav' src='profilephoto..jpg'/>
        <p>Sagar Mathur</p>
  
    <div className="items" id='items'>	
       <ul>
           <Link className='a' to="/Home"><li>Dashboard</li></Link>
           <Link className='a' to="/Contact"><li> Event</li></Link>
           <Link className='a' to="/user/:name"><li>Professor</li></Link>
           <Link className='a' to="/Home"><li>Student</li></Link>
           <Link className='a' to="/course"><li>Course <span>NEW</span> </li></Link>
           <Link className='a' to="/Home"><li>Library</li></Link>
           <Link className='a' to="/Home"><li>Department</li></Link>
           <Link className='a' to="/Home"><li>Staff</li></Link>
           <Link className='a' to="/Home"><li>Report</li></Link>
           <Link className='a' to="/Home"><li>Email <span>NEW</span></li></Link>
           <Link className='a' to="/Home"><li>Fees</li></Link>

           
    
    
    
    
       </ul>
       
  </div>  
 </div>
 </div>
 </div> 
  );
}

export default Nav;
