import CartContext from "../../store/CartContext";
import { useContext } from "react";
import classes from "./HeaderCartBtn.module.css";
import CartIcon from "../Cart/CartIcon";


const HeaderCartBtn = ({ showCartHandlerXYZ }) => {

    const exclusiveContext = useContext(CartContext);
    // // Showing the badge number by two ways first by reduce method and second by forEach method;

    // const numberOfCartProducts = exclusiveContext.items.reduce((acc, curr) => {
    //     return acc + curr.amount;
    // }, 0)

    let quantity = 0;
    exclusiveContext.items.forEach((arr) => {
        quantity = quantity + Number(arr.quantity);
    })


    return <button className={classes.button}
        onClick={showCartHandlerXYZ}
    >
        {/* Cart */}
        <span className={classes.icon}> <CartIcon></CartIcon> </span>
        <span> Your Cart </span>
        {/* <span> {exclusiveContext.message} </span> */}
        {/* <span className={classes.badge}> {numberOfCartProducts} </span> */}
        <span className={classes.badge}> {quantity} </span>
        {/* <span className={classes.badge}> 3 </span> */}

    </button>
}

export default HeaderCartBtn;