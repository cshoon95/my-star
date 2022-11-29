import { Store } from "redux";
import { initialDataState, initialViewState } from "../type/Type";
import { setState } from "../store/Data";
import { hideAlert, showAlert, showLoading, hideLoading} from "../store/View";
import { StoreStateType, AlertOptionType, LodingOptionType } from "../type/Type";

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

    public getState(key: StateType, type: string = 'data') {
        return this._store.getState()[type][key];
    }

    public setState(key: StateType, value: any): void {
        this._store.dispatch(setState(
            {[key]: value}
        ));
    }

    public alert(message: string, options?: AlertOptionType) {
        if (message === 'hide') {
            this.store.dispatch(hideAlert());
        } else {
            this.store.dispatch(showAlert({
                message,
                alertOptions: options
            }))
        }
    }

    public showLoading(type: string, options?: LodingOptionType) {
        this.store.dispatch(showLoading({
            loadingType: type,
            loadingOptions: options
        }))
    }

    public hideLoading(type: string ='normal') {
        if (!this.store) return;
        this.store.dispatch(hideLoading({
            loadingType: type
        }))
    }

    public log(message: any) {
        console.log(message);
    }

    public warnLog(message: any) {
        console.warn(message);
    }

    public infoLog(message: any) {
        console.info(message);
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