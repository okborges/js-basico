let eu = {
  nome: 'Rafael',
  sobrenome: 'Borges',
  idade: 24,
  carro: 'hb20',
  cidade: 'sbc',
  altura: 1.7,
};
eu.nomeCompleto = function () {
  return `${this.nome} ${this.sobrenome}`;
};
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
};

carro.preco = 3000;
