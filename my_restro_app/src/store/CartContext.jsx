import { createContext } from "react";

const CartContext = createContext({
    items: [],
    totalAmount: 0,
    addItem: (newItem) => { },
    removeItem: (id) => { },
    changeQuantity: (id, value) => { },
});
export default CartContext;