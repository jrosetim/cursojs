class Usuario{
    constructor(email, senha){
        this.email = email;
        this.senha = senha;
    }

    isAdmin(){
        //return  ((this.email == "teste@teste") && (this.senha == "seila123"));
         if ((this.email === "teste@teste") && (this.senha==="seila123")){
             return "É administrador";
         }else{
             return "Não é administrador";
         }
    }
}

class Admin extends Usuario{
    constructor(){
        super();
    }
}

const usuario1 = new Usuario("teste@teste", "seila123");
const admin1 = new Admin("teste@teste", "seila123");

console.log( usuario1.isAdmin());
console.log( admin1.isAdmin());

