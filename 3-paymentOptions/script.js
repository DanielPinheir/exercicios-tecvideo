// EXERCÍCIO 3
// =========================
// Elaborar um programa para uma loja, o qual leia o preço
// de um produto e informe as opções de pagamento da loja.
// Calcule e informe o valor para pagamento à vista com 10% de
// desconto e o valor em 3x.
// EXEMPLO:
// Preço: R$60,00
// À vista: R$54,00
// Ou 3x de: R$20,00
// =========================

const paymentOptions = (price, discount, installments) => {
  return `Preço: R$ ${price.toFixed(2)}\nA vista: R$ ${(
    price -
    price * (discount / 100)
  ).toFixed(2)}\nOu ${installments}x de: ${(price / installments).toFixed(2)}`;
};

console.log(paymentOptions(1999.99, 15, 12));
