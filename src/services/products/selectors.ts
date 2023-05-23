import { RootState } from "store";

export const getProductFromProductList = (state: RootState, productId?: number) => {
    const { productItems = [] } = state.products || {};
    const item = productItems.find(item => item.id === productId);
    return item;
}