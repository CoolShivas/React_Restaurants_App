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
        // const removeDishes = addCartItem.filter((crr) => {
        //     return crr.id !== id
        // })
        // setAddCartItem(removeDishes);

        console.log('remover')

        // const removeDishes = addCartItem.reduce((acc, curr) => {
        //     return acc + curr.quantity - curr.price
        // }, 0)
        // setAddCartItem(removeDishes);

    }


    const changeQuantity = (id, value) => {
        const special = addCartItem.findIndex((crr) => crr.id === id);

        // console.log("special", special);

        let updatedCartItems = [...addCartItem];

        console.log(typeof updatedCartItems[special].quantity);

        let qrr = Number(updatedCartItems[special].quantity);

        // console.log(qrr);

        updatedCartItems[special].quantity = qrr + value;

        console.log(typeof qrr);

        // console.log(updatedCartItems[special].quantity);

        if (updatedCartItems[special].quantity === 0) {
            updatedCartItems = updatedCartItems.filter(drr => drr.id !== id);
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