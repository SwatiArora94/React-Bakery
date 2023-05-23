import React from "react";
import './ProductDetailPage.scss';
import { useDispatch, useSelector } from "react-redux";
import { getIsProductInCart } from "services/cart/selectors";
import { useParams } from "react-router-dom";
import { RootState } from "store";
import { addProductToCart, removeProductFromCart } from "services/cart/cartSlice";
import { getProductFromProductList } from "services/products/selectors";

export const ProductDetailPage = () => {

    const params = useParams();
    const { id } = params;
    const productId = id === undefined || Number.isNaN(id) ? undefined : +id;
    const isProductInCheckout = useSelector((state: RootState) => getIsProductInCart(state, productId));
    const product = useSelector((state: RootState) => getProductFromProductList(state, productId)); 
    const dispatch = useDispatch()
    const { title, image, previewDescription, detailDescription } = product || {};

    const addToCart = (event: any) => {
        event.stopPropagation();
        dispatch(addProductToCart(product));
    }

    const removeFromCart = (event: any) => {
        event.stopPropagation();
        dispatch(removeProductFromCart(productId));
    }

    return (<div className="product-detail" >
        <div className="product-detail-image-cont">
            <img src={image} className="product-detail-image" alt={title} />
        </div>
        <div className="product-detail-cont">
            <div className="product-detail-title-cont">
                <span className="product-detail-title">{title}</span>
            </div>
            <div className="product-detail-preview-cont">
                <span className="product-detail-preview">{previewDescription}</span>
            </div>
            <div className="product-detail-description-cont">
                <span className="product-detail-description">{detailDescription}</span>
            </div>
        </div>
        {!isProductInCheckout && <div className="bakery-cta-cont">
            <button className="bakery-cta" onClick={addToCart}>Add to Cart</button>
        </div>}
        {!!isProductInCheckout && <div className="bakery-cta-cont">
            <button className="bakery-cta" onClick={removeFromCart}>Remove From Cart</button>
        </div>}
    </div>)
};

export default ProductDetailPage;
