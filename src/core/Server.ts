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
			timeout: 1000,
        });
    }
    
    private axios = this.initAxios();
    
    /** 로그 */
    static printLog = (url: string, res: any) => {
        ons.log('▨▨▨▨▨▨▨▨▨▨▨▨▶ ' +  url + ' 에서 가져온 정보 시작');
        ons.log(res);
        ons.log('▨▨▨▨▨▨▨▨▨▨▨▨▶ ' +  url + ' 에서 가져온 정보 종료');
    }

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
        }).then((res) => {
            Server.printLog(options.url, res);
            options.callbackFunc && options.callbackFunc(res)
        }).catch((err) => {
            throw new Error(err);
        }).then(() => {
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
            Server.printLog(options.url, res);
            options.callbackFunc && options.callbackFunc(res)
        }).catch((err: any) => {
            throw new Error(err);
        }).then(() => {
            !options.hideLoading && ons.hideLoading();
        }) 
    }

    /**
     * put 방식으로 서버 호출
     * @param options OptionsType
     * 
     * @see
     * get, post, put 메소드 빼고는 코드가 일치하는데..
     * 합칠 수 있을 거 같은데 흐음..
     */
    public put(options: OptionsType) {
        !options.hideLoading && ons.showLoading();

        this.axios.post(
            options.url, 
            options.data
        ).then((res: any) => {
            Server.printLog(options.url, res);
            options.callbackFunc && options.callbackFunc(res)
        }).catch((err: any) => {
            throw new Error(err);
        }).then(() => {
            !options.hideLoading && ons.hideLoading();
        }) 
    }

    /**
     * delete 방식으로 서버 호출
     * @param options OptionsType
     * 
     * @see
     * get, post, put 메소드 빼고는 코드가 일치하는데..
     * 합칠 수 있을 거 같은데 흐음..
     */
    public delete(options: OptionsType) {
        !options.hideLoading && ons.showLoading();

        this.axios.delete(options.url, {
            data: options.data
        }).then((res) => {
            Server.printLog(options.url, res);
            options.callbackFunc && options.callbackFunc(res)
        }).catch((err) => {
            throw new Error(err);
        }).then(() => {
            !options.hideLoading && ons.hideLoading();
        }); 
    }
}

export default new Server();