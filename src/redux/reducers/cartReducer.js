const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingProduct = state.filter(pd => pd._id === action.product._id)
      if(existingProduct.length === 0) {
        action.product.qty = 1;
        return (state = [...state, action.product]);
      } else {
        existingProduct[0].qty++;
        return state = [...state]
      }
    case "REMOVE_FROM_CART":
      return state.filter((el) => el._id !== action.product._id);
    case "INCREMENT_QTY":
      const incrementQtyPd = state.filter(pd => pd._id === action.product._id)
      if(incrementQtyPd.length !== 0) {
        incrementQtyPd[0].qty++; 
        return state = [...state] 
      } else{ 
        return state
      }
    case "DECREMENT_QTY":
      const decrementQtyPd = state.filter(pd => pd._id === action.product._id)
      if(decrementQtyPd.length !== 0) {
        decrementQtyPd[0].qty > 1 && decrementQtyPd[0].qty--; 
        return state = [...state] 
      } else{ 
        return state
      }
    default:
      return state;
  }
};
export default cartReducer;
