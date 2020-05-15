import api from './api';

class App{
    constructor(){
        this.repositories = [];
        this.formEl = document.querySelector('form[name=form]');
        this.listEl = document.querySelector('ul[id=lista]');
        this.inputEl = document.querySelector('input[name=repositorio]');

        this.registerHandlers();
    }

    registerHandlers(){
        this.formEl.onsubmit = envent => this.addRepository(event);
    }

    async addRepository(event){
        event.preventDefault();

        const repoInput = this.inputEl.value;

        if (repoInput.length === 0 )
            return;

        try{
            const response = await api.get(`/${repoInput}`);

            console.log(response);

            const {name, description, html_url, owner: { avatar_url } } = response.data;
            
            this.repositories.push({
                name,
                description,
                html_url,
                avatar_url,
            })

            this.render();
        }catch(erro){
            console.log("OOOOOOOOOPPPPSSSSS");
            console.log(erro);
        }
    }

    render(){
        this.listEl.innerHTML = '';

        this.repositories.forEach(repo =>{
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', repo.avatar_url);

            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(repo.name));

            let descriptionEl = document.createElement('p');
            descriptionEl.appendChild(document.createTextNode(repo.description));

            let aEl = document.createElement('a');
            aEl.setAttribute('target', '_black');
            aEl.setAttribute('href', repo.html_url);
            aEl.appendChild(document.createTextNode('Acessar'));

            let listItemEl = document.createElement('li');
            listItemEl.appendChild(imgEl);
            listItemEl.appendChild(titleEl);
            listItemEl.appendChild(descriptionEl);
            listItemEl.appendChild(aEl);

            this.listEl.appendChild(listItemEl);
        } )
    }
    
}

const MeuApp = new App();