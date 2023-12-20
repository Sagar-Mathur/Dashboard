import { useParams } from "react-router-dom" 
function Params1(){
    const Params=useParams();
    const{name}=Params;
    return(
    <div>
      <h1>this is {name}</h1>
    </div>
    )
}


export default Params1;