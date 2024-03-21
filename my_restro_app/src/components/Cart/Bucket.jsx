import classes from "./Bucket.module.css";
import Modal from "../UI/Modal";

const Bucket = (props) => {

    const cartItems = <ul className={classes['cart-items']}>
        {[
            {
                id: 'c1',
                name: 'Egg Curry',
                price: 65,
            }
        ].map((item) => {
            return <li key={item.id}> {item.name} </li>
        }
        )}
    </ul>

    return <Modal hideCartHandlerABC={props.hideCartHandlerABC}>
        {cartItems}
        <div className={classes.total}>
            <span> Total Amount </span>
            <span> Rs. 88.10 /- </span>
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