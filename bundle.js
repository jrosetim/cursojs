"use strict";

var usuarios = [{
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
}, {
  nome: 'Gabriel',
  idade: 15,
  empresa: 'Rocketseat'
}, {
  nome: 'Lucas',
  idade: 30,
  empresa: 'Facebook'
}];
var retorno = usuarios.map(function (item) {
  return item.idade;
});
console.log(retorno);
var retorno1 = usuarios.filter(function (item) {
  return item.empresa === "Rocketseat" && item.idade >= 18;
});
console.log(retorno1);
var retorno2 = usuarios.find(function (item) {
  return item.empresa === "Rocketseat";
});
console.log(retorno2);
var novaIdade = [];
var retorno3 = usuarios.reduce(function (total, item) {
  if (item.idade * 2 <= 50) {
    item.idade = item.idade * 2;
    total.push(item);
  }

  return total;
}, []);
console.log(retorno3);
