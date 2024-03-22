
import classes from "./HeaderCartBtn.module.css";
import CartIcon from "../Cart/CartIcon";
import { useContext } from "react";
import CartContext from "../../store/CartContext";



const HeaderCartBtn = ({ showCartHandlerXYZ }) => {

    const newMsg = useContext(CartContext);

    return <button className={classes.button}
        onClick={showCartHandlerXYZ}
    >
        {/* Cart */}
        <span className={classes.icon}> <CartIcon></CartIcon> </span>
        <span> Your Cart </span>
        <span> {newMsg.message} </span>
        <span className={classes.badge}> 3 </span>

    </button>
}

export default HeaderCartBtn;