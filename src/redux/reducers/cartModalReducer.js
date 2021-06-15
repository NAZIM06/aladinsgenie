const cartModalReducer = (state = false, action) => {
  switch (action.type) {
    case "CART_MODAL_STATE":
      return (state = !state);

    default:
      return state;
  }
};
module.exports = cartModalReducer;
