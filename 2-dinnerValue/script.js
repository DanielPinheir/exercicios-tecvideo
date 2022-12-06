// EXERCÍCIO 2
// Elaborar um programa que leia o valor de um jantar.
//Calcule e informe o valor da taxa do garçom (10%) e o
//valor total a ser pago.
// EXEMPLO:
// Valor do jantar: R$80,00
// Taxa do garçom: R$8,00
// Total a pagar: R$88,00
// ---------------------------------------------------------------

const totalDinnerValue = (price, rate) => {
  const waiterFee = rate / 100;
  return price + price * waiterFee;
};

console.log(`O preço total do jantar foi R$ ${totalDinnerValue(120, 10)}.`);
