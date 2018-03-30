export function formatCurrency (number){
  return new Intl.NumberFormat('en-Ng', {style: 'currency', currency: 'NGN'}).format(number);
}