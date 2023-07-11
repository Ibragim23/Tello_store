import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Styles from "./cart.module.css";

import { Link } from "react-router-dom";

import ShoppingCart from "../../assets/icons/shopping-cart.svg";
import Delete from "../../assets/icons/delete.svg";
import { addToCart, decreaseCart, getTotals, removeFromCart } from "../../redux/cart/cartReducer";

const Cart = () => {
const cartItem = useSelector((state) => state.cartItem)
const { cartItems } = useSelector((store) => store.cartItem );  
const dispatch = useDispatch();

useEffect(() => {
  dispatch(getTotals())
}, [cartItem, dispatch]);


const handleRemoveFromCart = (cartItem) => {
  dispatch(removeFromCart(cartItem));
}

const handleDecreaseCart = (cartItem) => {
  dispatch(decreaseCart(cartItem));
}

const handleIncreaseCart = (cartItem) => {
  dispatch(addToCart(cartItem));
}

  return (
    <>
     <div className={Styles.cart_container}>
     <h5> ({cartItem?.cartTotalQuantity} məhsul)</h5>

    {cartItems?.length === 0 ? (
      <div className={Styles.cart_empty}>
        <div className={Styles.start_shopping}>
           <img src={ShoppingCart} alt="Shopping"/>
          <Link to="/">
               <p>Səbətiniz halhazırda boşdur</p>
                <span>Alış-verişə davam et</span>
          </Link>
        </div>
      </div>
    ) : (
      <div>
        <div>
         {cartItems?.map(cartItem => (
      <div key={cartItem.id} className={Styles.cart} > 
      
      <div>
        <img src={cartItem?.image?.url} alt={cartItem.name} className={Styles.itemImg}/>
      </div>
      <div>
        {cartItem.name} 
      </div>
      <div>
        {cartItem?.price?.formatted_with_symbol}
      </div>
      <div className={Styles.cart_quantity}>
          <button onClick={() => handleDecreaseCart(cartItem)}>-</button>
          <div className={Styles.cart_counter}>
            {cartItem.cartQuantity}
          </div>
          <button onClick={() => handleIncreaseCart(cartItem)}>+</button>
      </div>
      <div className={Styles.remove}>
        <span onClick={() => handleRemoveFromCart(cartItem)} type="button">
        <img src={Delete}/>
        </span>
      </div>
      </div>
))} 
        </div>
        <div className={Styles.subtotal}>
              <h2>Ümumi {cartItem?.cartTotalQuantity} </h2>
              <h3>Məbləğ {cartItem?.cartTotalAmount} ₼</h3>
              <h3>Çatdırılma</h3>
              <h3>Hədiyyə paketi</h3>
              <h3>Promo kod</h3>
              <hr/>
              <h3>Cəmi {cartItem?.cartTotalAmount} ₼</h3>
        </div>
      </div>
    )}

     </div>
   
    </>
   
  );
};

export default Cart;

