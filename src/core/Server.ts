import axios from 'axios';
import ons from './Ons'

type OptionsType = {
    url: string;
    data?: any;
    callbackFunc: Function;
}
class Server{
    private initAxios = () => {
        return axios.create({
            baseURL: "http://127.0.0.1:3001/api",
			// timeout: 5000,
        });
    }
    
    private axios = this.initAxios();
    
    public get(options: OptionsType) {
        ons.showLoading();

        this.axios.get(options.url, {
            params: options.data
        }).then(function (res) {
            ons.log('▨▨▨▨▨▨▨▨▨▨▨▨▶ 서버에서 가져온 정보 시작');
            ons.log('▨▨▨▨▨▨▨▨▨▨▨▨▶', res);
            ons.log('▨▨▨▨▨▨▨▨▨▨▨▨▶ 서버에서 가져온 정보 끝');

            if (options.callbackFunc) options.callbackFunc(res);
        }).catch(function (err) {
            throw new Error(err);
        }).then(function () {
            ons.hideLoading();
        }); 
    }

    public post(options: OptionsType) {
        ons.showLoading();

        this.axios.post(
            options.url, 
            options.data
        ).then((res: any) => {
            ons.log('▨▨▨▨▨▨▨▨▨▨▨▨▶ 서버에서 가져온 정보 시작');
            ons.log('▨▨▨▨▨▨▨▨▨▨▨▨▶', res.data);
            ons.log('▨▨▨▨▨▨▨▨▨▨▨▨▶ 서버에서 가져온 정보 끝');

            if (options.callbackFunc) options.callbackFunc(res);
        }).catch((err: any) => {
            throw new Error(err);
        }).then(() => {
            ons.hideLoading();
        }) 
    }
}

export default new Server();