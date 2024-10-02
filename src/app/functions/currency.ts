export const maskCurrency = (money:number) => {
  let currencyFormat = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2
});
  return currencyFormat.format(money);
}