import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header"
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  }
  const hideCartHandler = () => {
    setCartIsShown(false);
  }

  return (
    <>
    <CartProvider>
    {cartIsShown && <Cart onCloseCart={hideCartHandler} />}
    <Header onShowCart={showCartHandler}/>
    <main>
    <Meals/>
    </main>
    <Footer/>
    </CartProvider>
    </>
  );
}

export default App;
