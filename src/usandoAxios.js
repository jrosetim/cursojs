import axios from 'axios';

class api{
    static async getUserInfo(usuario){
        try {
            const response = await axios.get(`https://api.github.com/users/${usuario}`);
            console.log(response);
        } catch (err) {
            console.log('erro na api');
        }
    }
}

api.getUserInfo('jrosetim');

api.getUserInfo('jrosetim1213');