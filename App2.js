import "./Toggle.css"
function App2(){
    function openNav()
	{
		document.getElementById('sidenav').style.width="200px";
		document.getElementById('main').style.marginLeft="200px";

	}
	function closeNav()
	{
		document.getElementById('sidenav').style.width="0px";
		document.getElementById('main').style.marginLeft="0px";

	}
    return(
        <div>
<div id="sidenav" class="sidenav">
	<a href="javascript:void(0)" class="closebtn" onClick={closeNav()}>&times;</a>
	<a href="">Home</a>
	<a href="">About</a>
	<a href="">Contact</a>
	<a href="">Services</a>
</div>
<div id="main">
	<span style="font-size: 30px;cursor: pointer;" onClick={openNav()}>&#9776;</span>
</div>
</div>
    )
}

    


export default App2;