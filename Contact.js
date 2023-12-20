import User from "./User";
import './Contact.css'
function Contact(){
    var drop=document.getElementsByClassName("dropdown-btn");
  
  for( var i=0;i<drop.length;i++)
  {
      drop[i].addEventListener("click",function()
      {
       
        var drop1=this.nextElementSibling;
        if(drop1.style.display === "block")
        {
          drop1.style.display="none";
        }
        else
        {
          drop1.style.display="block";
        }
      })
    }
    return(
    <div className="container">
<div class="sidenav">
      <a href="">Home</a>
      <a href="">About</a>
      <a href="">Services</a>
      <button class='dropdown-btn'>Drop</button>
      <div class='dropdown-container'>
      <a href="">Home</a>
      <a href="">About</a>
      <a href="">Services</a>
      </div>
      <a href="">Technologies</a>
    </div>
    </div>
    )
   

}




export default Contact;