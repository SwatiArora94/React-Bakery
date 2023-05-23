import React from "react";
import './LandingPage.scss';
import ProductTile from "components/ProductTile/ProductTile";
import { useSelector } from "react-redux";
import { RootState } from "store";

export const LandingPage = () => {

    const products = useSelector((state: RootState) => state.products.productItems); 
    const productView = products.map(product => <ProductTile key={product.id} product={product} />)

    return <div className="landing-page">
        <span className="landing-page-title">Cakes We Have</span>
        <div className="product-view">
            {productView}
        </div>
    </div>
}

export default LandingPage;
