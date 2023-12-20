import './Newform.css';
import Loginpage from './Loginpage';
function NewRegistration(){
   
    let a= Map.text
     console.log(a)
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
		          <form>
                    <label>Name :</label>
			        <input type="text" name=""  placeholder='Enter Name'/>
                    <br></br>
                    <br></br>
                    <label>Phone Number :</label>
                    <input type='Number'  placeholder='phone Number' />
                    <br></br>
                    <br></br>
                    <label>Password :</label>
                    <input type='New-password' placeholder='Password'/>
                    <br></br>
                    <br></br>
                    <label>Confirm Password :</label>
                    <input type='password' placeholder='Re-Password'/>
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