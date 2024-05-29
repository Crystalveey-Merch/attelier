export const getProductDetails = (productId, products) => {
  const product = products.find((product) => product.id === productId);
  return product;
};
