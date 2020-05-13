const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
   ];


const retorno = usuarios.map((item)=>{
                                    return item.idade;
});

console.log(retorno);   

const retorno1 = usuarios.filter((item)=>{
    return ((item.empresa === "Rocketseat") && (item.idade >= 18));
});

console.log(retorno1);

const retorno2 = usuarios.find((item)=>{
    return item.empresa === "Rocketseat";
})

console.log(retorno2);

let novaIdade = [];
const retorno3 = usuarios.reduce((total, item)=>{
    if ((item.idade * 2) <= 50){
        item.idade = item.idade * 2;
        total.push(item);
    }
    return total;
}, []);

console.log(retorno3);