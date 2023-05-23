import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "store";
import cartIcon from './CartIcon.svg'
import './CartIcon.scss';
import { useNavigate } from "react-router-dom";

export const CartIcon = ()=>{

    const cartCount = useSelector((state:RootState) => state.cart.cartItems?.length);
    const navigate = useNavigate();

    const onCartClick = () => {
        navigate(`/cart`);
    }

    return (<div className="cart-icon-cont" onClick={onCartClick}>
        <img src={cartIcon} className="cart-icon" alt="cart" />
        {cartCount > 0 && <div className="cart-count-cont">
            <span className="cart-count">{cartCount}</span>
            </div>
        }
    </div>
    )
}

export default CartIcon;