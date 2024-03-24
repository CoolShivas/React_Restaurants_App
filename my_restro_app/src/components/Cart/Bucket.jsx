import { useContext } from "react";
import CartContext from "../../store/CartContext";
import classes from "./Bucket.module.css";
import Modal from "../UI/Modal";

const Bucket = (props) => {

    const contextApi = useContext(CartContext);
    console.log(contextApi.items.nameABC)

    const cartItems = <ul className={classes['cart-items']}>
        {/* {[
            {
                id: 'c1',
                name: 'Sushi',
                amount: 2,
                price: 65,
            }
        ].map((item) => {
            return <li key={item.id}> Name : {item.name} Qty : {item.amount}  Rs.{item.price} /- </li>
        }
        )} */}


        {contextApi.items.map((item) => {
            return <li key={item.id}
                className={classes.liTag}
            >Name : {item.nameABC} Price : Rs.{item.priceABC} /- Qty : {item.quantity}</li>
        })}


    </ul>

    const calculateTotalAmount = () => {
        return contextApi.items.reduce((total, product) => total + parseFloat(product.priceABC), 0);
    }


    return <Modal hideCartHandlerABC={props.hideCartHandlerABC}>
        {cartItems}
        {/* {console.log(cartItems)} */}
        <div className={classes.total}>
            <span> Total Amount </span>
            {/* <span> Rs. 88.10 /- </span> */}
            <span> Rs. {calculateTotalAmount()} /- </span>
        </div>
        <div className={classes.reactions}>
            <button
                className={classes.btnFirst}
                onClick={props.hideCartHandlerABC}
            >
                Close
            </button>
            <button className={classes.btnSecond}> Order </button>
        </div>

    </Modal>
}


export default Bucket;