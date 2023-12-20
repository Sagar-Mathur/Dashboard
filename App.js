import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Home from './Home';
import Contact from './Contact';
import E404 from './E404';
import User from './User';
import Nav from './Nav';
import Navbar from './Navbar';
import Loginpage from './Loginpage';
import NewRegistration from './NewRegistration';
import Params1 from './Params1';
import Course from './Course';
function App() {
  return (
    <div>
      
      <BrowserRouter> 
       <Nav/>
       <Navbar/>   
    <Routes>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/*' element={<E404/>}/>
        <Route path='/' element={<Loginpage/>}/>
        <Route path='/new' element={<NewRegistration/>}/>
        <Route path='/user/:name' element={<Params1/>}/>
        <Route path='/course' element={<Course/>}/>


    </Routes>
    </BrowserRouter>
      
 </div>  
  );
}

export default App;







