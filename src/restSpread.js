// REST para objetos 

const info = {
    nome:"Julio Rosetim",
    idade:33,
    estadoCivil:"Casado"
}

const {nome, ...resto} = info;
console.log(nome);
console.log(resto);

//------------------------------------------------------
// REST para Arrays

const arr = [1, 2, 3, 4, 5, 6]

const [x, ...y] = arr;

console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]
//------------------------------------------------------
function soma(...params){
     return params.reduce((total, next)=> total + next)
}

console.log(soma(1,2,3,4,5,6));
console.log(soma(1,2));

//------------------------------------------------------
//SPREAD

const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil',
    }
   };

// essa utilização do spread permite copiar o objeto inteiro e editar somente um 
// atributo, no caso abaixo, o atributo alterado será o nome
  const usuario2 = {...usuario, nome:"Julio"};

  console.log(usuario2);

 
// exercicio, alterar o nome da cudade do usuario para Lontras  e exibir todos os dados
// fazer funcionar
 const usuario3 = {...usuario, endereco:{cidade:"Lontras"}}
 console.log(usuario3);