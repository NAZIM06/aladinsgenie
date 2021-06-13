const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return (state = [...state, action.product]);
    case "REMOVE_FROM_CART":
      return state.filter((el) => el.id !== action.product.id);
    default:
      return state;
  }
};
export default cartReducer;
