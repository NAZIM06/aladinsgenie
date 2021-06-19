function updatePrice(product) {
  return (product.totalprice = product.price * product.qty);
}

const cartReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingProduct = state.products.filter(
        (pd) => pd._id === action.product._id
      );
      if (existingProduct.length === 0) {
        action.product.qty = 1;
        action.product.totalprice = action.product.price;
        return {
          products: [...state.products, action.product],
        };
      } else {
        existingProduct[0].qty++;
        updatePrice(existingProduct[0]);
        return {
          products: [...state.products],
        };
      }
    case "REMOVE_FROM_CART":
      return state.filter((el) => el._id !== action.product._id);

    // Can be dry, repeating add to cart logic
    case "INCREMENT_QTY":
      const incrementQtyPd = state.products.filter(
        (pd) => pd._id === action.product._id
      );
      if (incrementQtyPd.length !== 0) {
        incrementQtyPd[0].qty++;
        updatePrice(incrementQtyPd[0]);
        return { products: [...state.products] };
      } else {
        return state;
      }
    // ==========================================
    case "DECREMENT_QTY":
      const decrementQtyPd = state.products.filter(
        (pd) => pd._id === action.product._id
      );
      if (decrementQtyPd.length !== 0) {
        decrementQtyPd[0].qty > 1 && decrementQtyPd[0].qty--;
        updatePrice(decrementQtyPd[0]);
        return { products: [...state.products] };
      } else {
        return state;
      }
    default:
      return state;
  }
};
export default cartReducer;
