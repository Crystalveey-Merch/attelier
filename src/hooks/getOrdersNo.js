export const getNoOfOrders = (productId, orders) => {
  // each order has productsPurchased which is an array of products
  const allProductsPurchasedProducts = orders
    .map((order) => order.productsPurchased)
    .flat();
  const productOrders = allProductsPurchasedProducts.filter(
    (product) => product.productId === productId
  );
  const totalQuantity = productOrders.reduce((acc, curr) => {
    return acc + curr.cartQuantity;
  }, 0);
  if (productOrders === 0) {
    return 0;
  }
  return totalQuantity;
};
