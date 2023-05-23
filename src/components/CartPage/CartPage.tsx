import React from "react";
import './CartPage.scss';
import { useSelector } from "react-redux";
import { RootState } from "store";
import CartItem from "components/CartItem/CartItem";
import { useNavigate } from "react-router";

export const CartPage = () => {

    const cartItems = useSelector((state: RootState) => state.cart.cartItems); 
    const cartItemsView = cartItems.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem} />)
    const navigate = useNavigate();

    const onCheckoutClick = () => {
        console.log("CheckedoutItems => ",cartItems);
    }

    const onAddItemsClick = () => {
        navigate(`/`);
    }

    return <div className="cart-item-page">
        {!!cartItems.length && <div>
                {cartItemsView}
            <div className="bakery-cta-cont">
                <button className="bakery-cta" onClick={onCheckoutClick}>Checkout</button>
            </div>
            </div>}
        {!cartItems.length && <div>
            <h1>Oops! No Cart Items Found</h1>
            <div className="bakery-cta-cont">
                <button className="bakery-cta" onClick={onAddItemsClick}>Add Items</button>
            </div>
            </div>}
    </div>
};

export default CartPage;
