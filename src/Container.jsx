import { useSelector } from "react-redux";
import "./css/container.css";
import SingleProduct from "./SingleProduct";
export default function Container() {
  const state = useSelector((state)=>state)
  return (
    <div className="container">
      <div className="categories">
        <div className="categ">Category 1</div>
        <div className="categ">Category 2</div>
        <div className="categ">Category 3</div>
      </div>
      <div className="products">
        <div className="txt">Products from Category 1</div>
        <div className="product-container">
         {
             state.map((el)=>{
                 return <SingleProduct data={el}/>
             })
         }
        </div>
      </div>
    </div>
  );
}
