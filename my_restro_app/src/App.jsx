import CartProvider from "./store/CartProvider";
import CartContext from "./store/CartContext";
import { useContext } from "react";
import Bucket from "./components/Cart/Bucket";
import { useState } from "react";
import ErrorModal from "./components/Cart/ErrorModal";
import Meals from "./components/Meals/Meals";
import Header from "./components/LayOut/Header";




function App() {

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false);
  }


  return <CartProvider>
    {cartIsShown && <Bucket hideCartHandlerABC={hideCartHandler} ></Bucket>}

    {/* {cartIsShown && <ErrorModal hideCartHandlerABC={hideCartHandler}></ErrorModal>} */}

    <Header
      showCartHandlerABC={showCartHandler}
    ></Header>

    <main>
      <Meals></Meals>
    </main>
  </CartProvider>
}


export default App; 