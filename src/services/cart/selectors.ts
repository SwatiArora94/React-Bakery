import { RootState } from "store";

export const getIsProductInCart = (state:RootState, productId?:number) => {
    const {cartItems = []} = state.cart || {};
    const itemIndex = cartItems.findIndex(item=>item.id === productId);
    return itemIndex === -1 ? false : true;
}