import './App.css'
import Home from './Home';

import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
function Loginpage(){
    function Login1(){
    let text='{"employees":['+
	'{"firstname":"sagar","password":"mathur"},'+
	'{"firstname":"anil","password":"yadav"}]}';
	

	const obj=JSON.parse(text);
	var a=document.getElementById("first").value;
    var b=document.getElementById("second").value;

	
	console.log(text)

  var status=0;
		for(var i=0;i<obj.employees.length;i++)
		{
			
			if(a==obj.employees[i].firstname && b==obj.employees[i].password)
			{
						status=1;
						break;
			}
		}
		if(status==1)
		{
			window.location="/Home"
		}
		else
		{
			alert("wrong password");
		}
    } 
    return(
	<div className='formbody'>
<h1 className='xyz'>login page</h1>
<div className='login'>
 <label>UserName :</label><br/>
<input type='text' className='name' id='first' required />
<br/>
<br/>
<label>Password :</label><br/>
<input type='password' className='password' id='second' required/>
<br/>
<br/>

<input type='submit' onClick={Login1}/>
<br/>
<Link className="" to="/new">New Registration</Link>
<br/>
</div>
</div>
    )
}
export default Loginpage;