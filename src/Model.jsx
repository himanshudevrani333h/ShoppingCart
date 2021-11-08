import "./css/navbar.css";
import { useDispatch } from "react-redux";
import { addtocart, deletefromcart, removefromcart } from "./redux/action";
export default function Model(params) {
  return (
    <div className="model-container">
      {params.data.length > 0 ? (
        params.data.map((el) => {
          return <Products data={el} />;
        })
      ) : (
        <h4>CART IS EMPTY</h4>
      )}
    </div>
  );
}

let Products = (props) => {
  const dispatch = useDispatch();
  return (
    <div className="product">
      <div className="pimage">
        <img src={props.data.image} />
      </div>
      <div className="qc">
        <h5>{props.data.name}</h5>
        <button
          className="up"
          onClick={(e) => {
            e.stopPropagation();
            dispatch(addtocart(props.data.id));
          }}
        >
          ^
        </button>
        <div>Quantity :</div>
        <div className="num">{props.data.incart}</div>
        <button
          className="down"
          onClick={(e) => {
            e.stopPropagation();
            dispatch(removefromcart(props.data.id));
          }}
        >
          v
        </button>
      </div>
      <button
        className="del"
        onClick={(e) => {
          e.stopPropagation();
          dispatch(deletefromcart(props.data.id));
        }}
      >
        DELETE
      </button>
    </div>
  );
};
