import axios from 'axios';
import ons from './Ons'

type OptionsType = {
    method?: 'get' | 'post' | 'put';
    url: string;
    data?: any
}
class Server{
    private _guid: string = '';
    private initAxios = () => {
        return axios.create({
            baseURL: "http://127.0.0.1:3001/api",
			// timeout: 5000,
        });
    }
    
    public get guid() {
		if(!this._guid){
			this._guid = (()=>{
				return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
					const r = Math.random() * 16 | 0, v = c === 'x' ? r : ((r & 0x3) | 0x8);
					return v.toString(16);
				});
			})();
		}
		return this._guid;
	}

    public axios1() {
        this.initAxios();
    }

    private axios = this.initAxios();
    public get(options: OptionsType, callbackFunc?: Function) {
        ons.showLoading();

        let response: any;

        this.axios.post(options.url, {
            params: options.data
        }).then(function (response) {
            ons.log('▨▨▨▨▨▨▨▨▨▨▨▨▶ 서버에서 가져온 정보 시작');
            ons.log('▨▨▨▨▨▨▨▨▨▨▨▨▶', response);
            ons.log('▨▨▨▨▨▨▨▨▨▨▨▨▶ 서버에서 가져온 정보 끝');

            response = response.data;
            if (callbackFunc) callbackFunc(response);
          })
          .catch(function (error) {
            response = error;
          })
          .then(function () {
            ons.hideLoading();
          });  

          return response;
    }
    public run(options: OptionsType, callbackFunc?: Function) {
        ons.showLoading();

        let response: any;

        this.axios({
            method: options.method,
            url: options.url,
            data: options.data,
            headers: {
                "Cache-Control": "no-cache",
                "X-DIRECT-CLIENT-ID": this.guid
            }
        })
        .then((res: any) => { 
            ons.log('▨▨▨▨▨▨▨▨▨▨▨▨▶ 서버에서 가져온 정보 시작');
            ons.log('▨▨▨▨▨▨▨▨▨▨▨▨▶', res);
            ons.log('▨▨▨▨▨▨▨▨▨▨▨▨▶ 서버에서 가져온 정보 끝');

            response = res.data;
            if (callbackFunc) callbackFunc(response);
        })
        .catch((err: any) => { 
            response = err;
            throw new Error(response);
        })
        .finally(() => {
            ons.hideLoading();
        });

        return response;
    }
}


export default new Server();