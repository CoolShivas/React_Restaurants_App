import { useState } from "react";
import CartContext from "./CartContext";


const CartProvider = (props) => {

    const [addCartItem, setAddCartItem] = useState([])

    const addItemToBucketHandler = (newItem) => {
        setAddCartItem([
            ...addCartItem,
            newItem,
        ])
    }

    const removeItemToBucketHandler = (id) => {

    }

    const cartContextApi = {
        items: addCartItem,
        totalAmount: 0,
        addItem: addItemToBucketHandler,
        removeItem: removeItemToBucketHandler,
        // message: 'Click here',
    };

    return <CartContext.Provider value={cartContextApi}>
        {props.children}
    </CartContext.Provider>
}


export default CartProvider;