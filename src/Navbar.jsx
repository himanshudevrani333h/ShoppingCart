import "./css/navbar.css"
import { useSelector } from "react-redux"
import { useState,useEffect } from "react"
import Model from "./Model"
export default  function Navbar (){
const state = useSelector(state => state)
const [cartstate, setcartstate] = useState(0)
const [modelstate,setmodelstate]= useState([])
const [buttonclick,setbuttonclick] = useState(false)
useEffect(() => {
    let itemsNUmber = 0;
    let mstate = [];
    state.map((el)=>{
        if(el.incart !=0){
          mstate.push(el)
         itemsNUmber+=el.incart;
        }
    })

    setcartstate(itemsNUmber)
    setmodelstate(mstate)
}, [state])
return(
    <div className="navbar">
        <div className="name">  
        BlaBLACART</div>
        <div className="box">
        <div className="cart" onClick={(e)=>{
            
          buttonclick?setbuttonclick(false):setbuttonclick(true)
          
        }}>
            {buttonclick?<Model data={modelstate}/>:""}
            Cart
            <div className="show">
                {cartstate}
            </div>
        </div>
        <div className="profile-pic"></div>
        <div className="user">
            UserName
        </div>
        </div>
      
    </div>
)    
}