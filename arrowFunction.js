const arr = [1, 2, 3, 4, 5];

// arr.map(function(item) {
//  return item + 10;
// });

arr.map((item)=> {
 return item + 10;
});

console.log(arr);

//-------------------------------------------------------------------------

const usuario = { nome: 'Diego', idade: 23 };

const mostraIdade = (usuario)=> {
 return usuario.idade;
}

console.log(( mostraIdade(usuario)));

//-------------------------------------------------------------------------

const nome = "Diego";
const idade = 23;

const mostraUsuario = (nome = 'Diego', idade = 18) => {
 return { nome, idade };
}

console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome));

//-------------------------------------------------------------------------
const promise = ()=> {
    return new Promise(function(resolve, reject) {
    return resolve();
    })
   }
