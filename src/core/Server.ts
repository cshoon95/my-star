import axios from 'axios';
import ons from './Ons'

type OptionsType = {
    method: 'get' | 'post';
    url: string;
    data?: any
}
class Server{
    private initAxios = () => {
        return axios.create({
            baseURL: "http://localhost:3001/api/",
			// timeout: 5000,
        });
    }
    
    private axios = this.initAxios();

    public run(options: OptionsType, callbackFunc?: Function) {
        ons.showLoading();

        let response: any;

        this.axios({
            method: options.method,
            url: options.url,
            data: options.data
        })
        .then((res: any) => { 
            response = res.data;
            if (callbackFunc) callbackFunc(response);
        })
        .catch((err: any) => { 
            response = err;
            throw new Error(response);
        })
        .finally(() => {
            ons.log('▨▨▨▨▨▨▨▨▨▨▨▨▶ 서버에서 가져온 정보 시작');
            ons.log('▨▨▨▨▨▨▨▨▨▨▨▨▶', response);
            ons.log('▨▨▨▨▨▨▨▨▨▨▨▨▶ 서버에서 가져온 정보 끝');
            ons.hideLoading();
        });

        return response;
    }
}


export default new Server();