import './App.css';
import Home from './Home';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Loginpage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userdata, setUserData] = useState(null);

    const fetchdata = async () => {
        try {
            const response = await fetch('http://localhost:5000/fetchUserData', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username,password})
            });
            const data = await response.json();
            if (response.ok) {
                founduser(data) // Corrected this line
            } else {
                alert('User not found');
            }
        } catch (error) {
            console.error('Fetching error', error);
        
	   }
    };
	function founduser(data){
		let pass=document.getElementById('password').value
		let user=document.getElementById('username').value
		console.log(pass+""+user)
		
		//console.log(pass +""+ user)
		console.log(data)
	   
	   
		if(pass==data[0].password&&user==data[0].username){
			window.location.href='/home';
		  alert('suceess')
			
		  }
		  else{
			alert('user or password invalid')
		  }
		

	}

    return (
        <div className='formbody'>
            <h1 className='xyz'>Login page</h1>
            <div className='login'>
                <label>UserName :</label><br />
                <input type='text' placeholder='Username' className='name' value={username} onChange={(e) => setUsername(e.target.value)} id='username' />
                <br /><br />
                <label>Password :</label><br />
                <input type='password' placeholder='Password' className='password' value={password} onChange={(e) => setPassword(e.target.value)} id='password' />
                <br /><br />
                <button onClick={fetchdata}>Login</button>
                <br />
                <Link className="" to="/new">New Registration</Link>
                <br />
                {userdata && (
                    <div>
                        <h2>User Data</h2>
                        <p>Username: {userdata[0].username}</p>
                        <p>Email: {userdata[0].email}</p>
                        <p>Password: {userdata[0].password}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Loginpage;
