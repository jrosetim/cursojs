import api from './api';

class App{
    constructor(){
        this.repositorie = [];
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

        const response = api.get(`/${repoInput}`);

        console.log(response);

        //const {name, description, html_url, owner:{avatar_url}} = response;

        this.repositorie.push({
            name,
            description,
            avatar_url,
            html_url,
        })

        this.render();
    }

    render(){
        this.listEl.innerHTML = '';

        console.log(repositorie);

        this.repositorie.forEach(repo =>{
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', repo.avatar_url);

            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(repo.name));

            let descriptionEl = document.createElement('p');
            descriptionEl.appendChild(document.createTextNode(repo.description));

            let aEl = document.createElement('a');
            aEl.setAttribute('href', repo.html_url);

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