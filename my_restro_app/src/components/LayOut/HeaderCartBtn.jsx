import classes from "./HeaderCartBtn.module.css";
import CartIcon from "../Cart/CartIcon";


const HeaderCartBtn = ({ showCartHandlerXYZ }) => {
    return <button className={classes.button}
        onClick={showCartHandlerXYZ}
    >
        {/* Cart */}
        <span className={classes.icon}> <CartIcon></CartIcon> </span>
        <span> Your Cart </span>
        <span className={classes.badge}> 3 </span>
    </button>
}

export default HeaderCartBtn;