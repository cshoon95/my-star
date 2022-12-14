import { Store } from "redux";
import { initialDataState, initialViewState } from "../type/Type";
import { setState } from "../store/Data";
import { hideAlert, 
        showAlert, 
        showLoading, 
        hideLoading,
        showPopup,
        hidePopup, 
        movePage,
        showDrawer,
        hideDrawer,
        changeMode
} from "../store/View";
import { StoreStateType, AlertOptionType, LodingOptionType, PopupOptionType } from "../type/Type";
import Server from "./Server";
import Message from "./Message";
import List from "./List";
import utils from "./Utils";

type StateType = keyof typeof initialDataState | keyof typeof initialViewState;

export class Ons {
    private _store!: Store;
    
    public init(inStore: Store) {
        this._store = inStore;
    }

    public get store() {
        return this._store;
    }

    public set store(inStore: Store) {
        this.store = inStore;
    }

    public get state(): StoreStateType {
        return this.store.getState();
    }

    public get list() {
        return List;
    }

    public get message() {
        return Message;
    }

    public get server() {
        return Server;
    }

    public get utils() {
        return utils;
    }

    public getState(key: StateType, type: string = 'data') {
        return this._store.getState()[type][key];
    }

    public setState(key: StateType, value: any, type: string = 'data'): void {
        this._store.dispatch(setState({ [key]: value }));
    }
    
    public alert(message: string, option?: AlertOptionType) {
        (message === 'hide') ? this._store.dispatch(hideAlert()) : this._store.dispatch(showAlert({ message, alertOption: option }))
    }

    public showLoading(type?: string, option?: LodingOptionType) {
        this._store.dispatch(showLoading({
            loadingType: type,
            loadingOption: option
        }))
    }

    public hideLoading(type: string ='normal') {
        this._store.dispatch(hideLoading({
            loadingType: type
        }))
    }
    
    public showPopup(name: string, option?: PopupOptionType) {
        this._store.dispatch(showPopup({
            popupName: name,
            popupOption: option
        }))
    }

    public hidePopup(type: string ='normal') {
        this._store.dispatch(hidePopup())
    }
    
    public showDrawer() {
        this._store.dispatch(showDrawer());
    }

    public hideDrawer() {
        this._store.dispatch(hideDrawer());
    }

    public route(path: string) {
        const updatePath = path === '' ? 'Dashboard' : utils.replaceToUpperCaseFirst(path);

        this._store.dispatch(movePage({
            pageName: updatePath,
            headerTitle: List.headerTitle[updatePath]
        }))
    }

    public changeMode(viewMode: string) {
        this._store.dispatch(changeMode({
            viewMode: viewMode
        }));
    }
    
    public setCustomerList = (callbackFunc?: Function) => {
        ons.server.get({
            url: 'customers/list',
            hideLoading: true,
            callbackFunc: (response: any) => {
              const setCustomers = response.data.map((item: any) => {
                item.TEL = (item.TEL && utils.replaceHypenFormat(item.TEL, 'phone')) || '';
                item.DDAY = 'D+' + (item.DATE && utils.daysBetween(item.DATE)) || '';
                item.DATE = (item.DATE && utils.replaceHypenFormat(item.DATE, 'date')) || '';
                item.FEE = (item.FEE && utils.replaceUnitMoney(item.FEE)) || '';
                item.PARENTPHONE = (item.PARENTPHONE && item.PARENTPHONE !== '010 '&& utils.replaceHypenFormat(item.PARENTPHONE, 'phone')) || '';
                item.BIRTH = (item.BIRTH && utils.replaceHypenFormat(item.BIRTH, 'date')) || '';
      
                return item;
              })
              ons.setState('customers', setCustomers);

              if (callbackFunc) {
                callbackFunc(response);
              }
              
          }});
    }
    public log(message: any, message2?: any, message3?: any) {
        if (message3) {
            console.log(message, message2, message3);
            return;
        }

        if (message2) {
            console.log(message, message2);
            return;
        }

        console.log(message);
    }

    public warnLog(message: any, message2?: any) {
        if (message2) {
            console.warn(message, message2);
            return;
        }

        console.warn(message, message2);
    }

    public infoLog(message: any, message2?: any) {
        if (message2) {
            console.info(message, message2);
            return;
        }

        console.info(message, message2);
    }

    public groupLog(messages: Array<any>) {
        console.group();
        messages.map(message => console.log(message));
        console.groupEnd();
    }

    public timeLog(message: any, func: Function) {
        console.time(message);
        func();
        console.timeEnd(message);
    }
}

const ons = (window as any).devons = new Ons();

export default ons;