import classes from "./HeaderCartButton.module.css";
import CartIcon from "../../assets/CartIcon";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const [cartCxt] = useContext(CartContext);
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const numberOfCartItems =
    cartCxt.items === undefined
      ? 0
      : cartCxt.items.reduce((curVal, item) => {
          return curVal + item.amount;
        }, 0);

  // const numberOfCartItems = 0;
  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  useEffect(() => {
    if (cartCxt.items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartCxt.items]);

  return (
    <button className={btnClasses} onClick={props.onShowCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span className={classes.text}>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
