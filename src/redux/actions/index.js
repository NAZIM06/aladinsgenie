export const add_to_cart = (productData) => {
  return {
    type: "ADD_TO_CART",
    product: productData,
  };
};
export const remove_from_cart = (productData) => {
  return {
    type: "REMOVE_FROM_CART",
    product: productData,
  };
};

export const change_cart_state = () => {
  return {
    type: "CART_MODAL_STATE",
  };
};
