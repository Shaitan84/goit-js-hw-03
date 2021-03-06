'use strict';

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

const calculateTotalPrice = function (allProdcuts, productName) {
  // const data = { ...allProdcuts };

  for (const key in allProdcuts) if (allProdcuts[key].name === productName) return allProdcuts[key].price * allProdcuts[key].quantity;
};

console.log(calculateTotalPrice(products, 'Радар'));

console.log(calculateTotalPrice(products, 'Дроид'));