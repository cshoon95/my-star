import axios from 'axios';
import ons from './Ons'

type OptionsType = {
    url: string;
    data?: any;
    hideLoading?: boolean;
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
    
    /**
     * get 방식으로 서버 호출
     * @param options OptionsType
     * 
     * @see
     * get과 post가 메소드 빼고는 코드가 일치하는데..
     * 합칠 수 있을 거 같은데 흐음..
     */
    public get(options: OptionsType) {
        !options.hideLoading && ons.showLoading();

        this.axios.get(options.url, {
            params: options.data
        }).then(function (res) {
            ons.log('▨▨▨▨▨▨▨▨▨▨▨▨▶ 서버에서 가져온 정보 시작');
            ons.log(res);
            ons.log('▨▨▨▨▨▨▨▨▨▨▨▨▶ 서버에서 가져온 정보 끝');

            options.callbackFunc && options.callbackFunc(res)
        }).catch(function (err) {
            throw new Error(err);
        }).then(function () {
            !options.hideLoading && ons.hideLoading();
        }); 
    }

    /**
     * post 방식으로 서버 호출
     * @param options OptionsType
     * 
     * @see
     * get과 post가 메소드 빼고는 코드가 일치하는데..
     * 합칠 수 있을 거 같은데 흐음..
     */
    public post(options: OptionsType) {
        !options.hideLoading && ons.showLoading();

        this.axios.post(
            options.url, 
            options.data
        ).then((res: any) => {
            options.callbackFunc && options.callbackFunc(res)
        }).catch((err: any) => {
            throw new Error(err);
        }).then(() => {
            !options.hideLoading && ons.hideLoading();
        }) 
    }
}

export default new Server();