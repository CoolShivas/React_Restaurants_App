import classes from "./HeaderCartBtn.module.css";
import CartIcon from "../Cart/CartIcon";


const HeaderCartBtn = () => {
    return <button className={classes.button}>
        {/* Cart */}
        <span className={classes.icon}> <CartIcon></CartIcon> </span>
        <span> Your Cart </span>
        <span className={classes.badge}> 3 </span>
    </button>
}

export default HeaderCartBtn;