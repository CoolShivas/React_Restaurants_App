import CartIcon from "../Cart/CartIcon";


const HeaderCartBtn = () => {
    return <button className="button">
        {/* Cart */}
        <span className="icon"> <CartIcon></CartIcon> </span>
        <span> Your Cart </span>
        <span className="badge"> 3 </span>
    </button>
}

export default HeaderCartBtn;