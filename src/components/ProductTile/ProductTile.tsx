import React from "react";
import './ProductTile.scss';
import { Props } from "./types";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getIsProductInCart } from "services/cart/selectors";
import { RootState } from "store";
import { addProductToCart, removeProductFromCart } from "services/cart/cartSlice";

export const ProductTile: React.FC<Props> = ({ product }) => {

    const {id, title, image, previewDescription} = product;
    const isProductInCheckout = useSelector((state: RootState) => getIsProductInCart(state, id));
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onProductClick = () => {
        navigate(`/product/${id}`);
    }

    const addToCart = (event:any) => {
        event.stopPropagation();
        dispatch(addProductToCart(product));
    }

    const removeFromCart = (event:any) => {
        event.stopPropagation();
        dispatch(removeProductFromCart(id));
    }

    return <div className="product-tile" onClick={onProductClick}>
        <div className="product-image-cont">
            <img src={image} className="product-image" alt={title} />
        </div>
        <div className="product-details">
            <div className="product-title-cont">
                <span className="product-title">{title}</span>
            </div>
            <div className="product-preview-cont">
                <span className="product-preview">{previewDescription}</span>
            </div>
        </div>
        {!isProductInCheckout && <div className="bakery-cta-cont">
            <button className="bakery-cta" onClick={addToCart}>Add to Cart</button>
        </div>}
        {!!isProductInCheckout && <div className="bakery-cta-cont">
            <button className="bakery-cta" onClick={removeFromCart}>Remove From Cart</button>
        </div>}
    </div>
}

export default ProductTile;
