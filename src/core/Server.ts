import axios from 'axios';

type optionsType = {
    method: 'get' | 'post';
    url: string;
    data?: any
}
class Server{
    private initAxios = () => {
        return axios.create({
            baseURL: "http://localhost:3001/api/"
        });
    }
    
    private axios = this.initAxios();

    public run(options: optionsType = { 
        method: 'get', 
        url: ''
    }) {
        let response: any;
        let error: any;

        this.axios({
            method: options.method,
            url: options.url,
            data: options.data
        })
        .then((res: any) => { response = res; })
        .catch((err: any) => { error = err; })
        
        // axios({
        //     url: '/user/12345',
        //     method: 'put',
        //     data: {
        //       firstName: 'Fred',
        //       lastName: 'Flintstone'
        //     }
        //   })
        return response ? response : error;
    }
}


export default new Server();