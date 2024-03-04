import './Newform.css';
import Loginpage from './Loginpage';
import { useState } from 'react';
function NewRegistration(){
    const[formdata,setformdata]=useState({
        username:'',
        email:'',
        password:''
       })
       const handlechange=  (e) =>{
        setformdata({ ...formdata, [e.target.name]: e.target.value });          
       }
        console.log(formdata)
       const handlesubmit=async(e)=>{
        e.preventDefault();
           try{
               const response=await fetch("http://localhost:5000/register",{
                   method: 'POST',
                   header:{
                       'Content-Type':'application/json'
                   },
                   body:JSON.stringify(formdata)
                })
                console.log(formdata)
                const data= await response.json();
                console.log(data.message);
           } catch(error){
               console.error('ERROR:',error);
           }
        }
   
    function close()
    {
       
        window.location="/"
    }
    return(
        <div>
              
	          <div className="overlay" id="overlay">
	          <div className="popup">
		          <span id="close-btn" onClick={close}>X</span>
		          <h2>New Registration</h2>
                  <img src="" />
		          <form onSubmit={handlesubmit}>
                    <label>Name :</label>
                    <input type="text" name="username" placeholder="Username" onChange={handlechange} />                    <br></br>
                    <br></br>
                    <label>Phone Number :</label>
                    <input type="email" name="email" placeholder="Email" onChange={handlechange} />
                    <br></br>
                    <br></br>
                    <label>Password :</label>
                    <input type="password" name="password" placeholder="Password" onChange={handlechange} />
                    <br></br>
                    <br></br>
                   
                    <br></br>
			        <input type="submit" name=""/>
		</form>
	</div>
 </div>
        </div>
    )
} 


export default NewRegistration;
        </div>
    )
} 


export default NewRegistration;
