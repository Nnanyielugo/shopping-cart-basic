export function updatePrices(products){
  let prices = [], total = 0;

  for(let product in products){
    prices.push(products[product].price * parseInt(products[product].quantity));
    total = prices.reduce((a, b) => a+b)
  }
  return total;
}

export function increaseQuantity(cart, id){
  cart.some(item => {
    if(item.id === id){
      item.quantity += 1;
    }
  })
  return cart;
}

export function reduceQuantity(cart, id) {
  cart.some(item => {
    if(item.id === id){
      item.quantity -= 1;
    }
  })
  return cart;
}

export function removeItem(cart, id){
  let index = cart.findIndex(x => x.id === id)
  cart.splice(index, 1);

  return cart
}