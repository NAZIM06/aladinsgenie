export const add_to_cart = (productData) => {
  return {
    type: "ADD_TO_CART",
    product: productData,
  };
};
