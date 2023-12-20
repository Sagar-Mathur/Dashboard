
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home';
import Contact from './Contact';
import E404 from './E404';
import Nav from './Nav';
import Loginpage from './Loginpage';
import Params1 from './Params1';
function User(){
    return(
        <div>
            
    <BrowserRouter> 
       <Nav/>       
    <Routes>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/*' element={<E404/>}/>
        <Route path='/' element={<Loginpage/>}/>
        <Route path='/user/:name' element={<Params1/>}/>

    </Routes>
    </BrowserRouter>
        </div>
    )
} 

export default User;