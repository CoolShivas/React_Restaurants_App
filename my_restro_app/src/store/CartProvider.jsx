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


    const changeQuantity = (id, value) => {
        const special = addCartItem.findIndex((crr) => crr.idABC === id);

        // console.log("special", special);
        console.log(id, "identifier")

        let updatedCartItems = [...addCartItem];

        // console.log(typeof updatedCartItems[special].quantity);

        let qrr = Number(updatedCartItems[special].quantity);

        // console.log(qrr);

        updatedCartItems[special].quantity = qrr + value;

        console.log(typeof qrr);

        // console.log(updatedCartItems[special].quantity);

        if (updatedCartItems[special].quantity === 0) {
            updatedCartItems = updatedCartItems.filter(drr => drr.idABC !== id);
        }
        setAddCartItem(updatedCartItems);
    }



    const cartContextApi = {
        items: addCartItem,
        totalAmount: 0,
        addItem: addItemToBucketHandler,
        removeItem: removeItemToBucketHandler,
        changeQuantity: changeQuantity,
        // message: 'Click here',
    };

    return <CartContext.Provider value={cartContextApi}>
        {props.children}
    </CartContext.Provider>
}


export default CartProvider;