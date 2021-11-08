import "./css/singleproduct.css"
import { useDispatch} from "react-redux"
import { addtocart } from "./redux/action"
export default function SingleProduct(props){
     const dispatch = useDispatch()
    return(
        <div className="p-container">
            <div className="p-image">
               <img src={props.data.image} alt="..."/>
            </div>
            <div className="p-details">{props.data.name}</div>
            <button className="add-to-cart" onClick={()=>{
                  dispatch(addtocart(props.data.id));
            }}>
                ADD TO CART
            </button>
        </div>
    )
}