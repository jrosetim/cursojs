// const nome = 'Diego';
// const idade = 23;
// const usuario = {
//  nome: nome,
//  idade: idade,
//  cidade: 'Rio do Sul',
// };

// Object Short Syntax, no casos seria, como o nome da variavel é igual ao
// do atributo, não precisaria fazer um receber o outro, é só colocar o nome
// do atributo que ja busca o valor corretamente
const nome = 'Diego';
const idade = 23;
const usuario = {
 nome,
 idade,
 cidade: 'Rio do Sul',
};

console.log(usuario);
