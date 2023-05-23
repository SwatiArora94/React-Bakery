import React from "react";
import './CartItem.scss';
import { Props } from "./types";
import { useDispatch } from "react-redux";
import { removeProductFromCart } from "services/cart/cartSlice";

export const CartItem:React.FC<Props> = ({cartItem}) => {

    const { id, title, image, previewDescription } = cartItem;
    const dispatch = useDispatch();


    const removeFromCart = (event: any) => {
        event.stopPropagation();
        dispatch(removeProductFromCart(id));
    }

    return <div className="cart-item-tile">
        <div className="cart-content">
            <div className="cart-item-image-cont">
                <img src={image} className="cart-item-image" alt={title} />
            </div>
            <div className="cart-item-details">
                <div className="cart-item-title-cont">
                    <span className="cart-item-title">{title}</span>
                </div>
                <div className="cart-item-preview-cont">
                    <span className="cart-item-preview">{previewDescription}</span>
                </div>
            </div>
        </div>
        <div className="bakery-cta-cont">
            <button className="bakery-cta" onClick={removeFromCart}>Remove From Cart</button>
        </div>
    </div>
};

export default CartItem;
