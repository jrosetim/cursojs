const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

// const delay = () => new Promise(resolve => setTimeout(resolve, 1000));
// function umPorSegundo() {
//  delay().then(() => {
//  console.log('1s');
//  delay().then(() => {
//  console.log('2s');
//  delay().then(() => {
//  console.log('3s');
//  });
//  })
//  });
// }
// umPorSegundo();

// função transformada em async, muito menos verbosa

async function umPorSegundo(){
    await delay().then(()=> console.log('1s'));
    await delay().then(()=> console.log('2s'));
    await delay().then(()=> console.log('3s'));
    await delay().then(()=> console.log('4s'));
}


umPorSegundo();



class Github {
    static async getRepositories(repo) {
        try{
            const response = await axios.get(`https://api.github.com/repos/${repo}`);
            console.log(response.data);
        }catch(err){
            console.log('Repositório não existe');
        }
    }
}


Github.getRepositories('jrosetim/cursojs');   
Github.getRepositories('rocketseat/rocketseat.com.br');
Github.getRepositories('rocketseat/dslkvmskv');
