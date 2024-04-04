import { BsBagDash } from "react-icons/bs";
import { BsBagPlus } from "react-icons/bs";
import { useContext, useState } from "react";
import CartContext from "../../store/CartContext";
import classes from "./Bucket.module.css";
import Modal from "../UI/Modal";

const Bucket = (props) => {

    const contextApi = useContext(CartContext);
    // console.log(contextApi.items)

    const incrementQtyHandler = (id) => {
        contextApi.changeQuantity(id, 1)
        console.log(id, "bucket id")
    }

    const decrementQtyHandler = (id) => {
        contextApi.changeQuantity(id, -1)
    }

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
            >Name : {item.nameABC} Price : Rs.{item.priceABC} /- Qty : {item.quantity}
                <button className={classes.common} onClick={() => incrementQtyHandler(item.idABC)}> <BsBagPlus /> </button>
                <button className={classes.common} onClick={() => decrementQtyHandler(item.idABC)}> <BsBagDash /> </button>
            </li>
        })}


    </ul>

    const calculateTotalAmount = () => {
        return contextApi.items.reduce((total, product) => total + parseFloat(product.priceABC * product.quantity), 0);
    }

    // const accumulatedPrice = `${contextApi.totalAmount.toFixed(2)}`


    return <Modal hideCartHandlerABC={props.hideCartHandlerABC}>
        {cartItems}
        {/* {console.log(cartItems)} */}
        <div className={classes.total}>
            <span> Total Amount </span>
            {/* <span> Rs. 88.10 /- </span> */}
            <span> Rs. {calculateTotalAmount()} /- </span>
            {/* <span> {accumulatedPrice} </span> */}
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