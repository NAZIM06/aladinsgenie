const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingProducts = state.filter(pd => pd._id === action.product._id)
      if(existingProducts.length === 0) {
        action.product.qty = 1;
        return (state = [...state, action.product]);
      } else {
        existingProducts[0].qty++;
        return state = [...state]
      }
      
    case "REMOVE_FROM_CART":
      return state.filter((el) => el._id !== action.product._id);
    default:
      return state;
  }
};
export default cartReducer;
