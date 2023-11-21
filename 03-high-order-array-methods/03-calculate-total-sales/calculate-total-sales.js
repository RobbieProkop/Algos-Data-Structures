function calculateTotalSalesWithTax(products, taxRate) {
  //using forEach
  // let total = 0;
  // products.forEach((product) => (total += product.price * product.quantity));

  // return (total + total * (taxRate / 100)).toFixed(2);

  const total = products.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );
  return ((total * taxRate) / 100 + total).toFixed(2);
}

module.exports = calculateTotalSalesWithTax;
