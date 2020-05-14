const empresa = {
    nome: 'Rocketseat',
    endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC',
    }
   };

// pegar quais atributos do objeto quer desestruturar e na frente passar o objeto
// note que o endereço foi passado sem parametro, dessa forma sera pego o objeto,
// para utilizar os atributos teria que usar endereco.cidade

// const {nome, endereco} = empresa;
   
// console.log(nome); 
// console.log(endereco.cidade);

//-------------------------------------------------------------------------------
// dessa forma o objeto endereço de dentro da empresa tb é desestruturado, podendo
// ser utilizado da seginte forma
const {nome, endereco:{cidade, estado}} = empresa;
   
console.log(nome); 
console.log(cidade);

//-------------------------------------------------------------------------------
const usuario ={
    nome:"Julio Rosetim",
    idade:33,
    estadocivil:"Casado"
}

// A desestruturação pode ser feito atravez de uma passagem de parametros tb,
//nesse caso foi passado o objeto idade e no parametro foi colodado entr {} 
// os atributos que eu quero utilizar
function mostraInfo({nome, idade}) {
    //return `${usuario.nome} tem ${usuario.idade} anos.`;
    return `${nome} tem ${idade} anos.`;
   }
   
console.log(mostraInfo(usuario));



   
