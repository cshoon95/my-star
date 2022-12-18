import utils from '../core/Utils';

export type StoreStateType = {
    data: StoreStateDataType;
    view: StoreStateViewType;
}

export type StoreStateDataType = {
    sysdate: string;
    systime: string;
    isMobile: boolean;
    academyName: string;
}

export type StoreStateViewType = {
    [x: string]: any;
    alertMessage: string;
    alertOption: AlertOptionType;
    loadingType: string;
    loadingOption: LodingOptionType;
    pageName: string;
    headerTitle: string;
    popupName: string;
    popupOption: PopupOptionType;
    isShownDrawer: boolean;
    drawerWidth: number;
    viewMode: string;
};

// Option Types
export type AlertOptionType = {
    title: string;
    confirm: string;
    color: 'error' | 'info' | 'success' | 'warning';
    compFunc: Function;
    callbackFunc: Function;
};

export type LodingOptionType = {
    color:
        | 'inherit'
        | 'primary'
        | 'secondary'
        | 'error'
        | 'info'
        | 'success'
        | 'warning';
    disableShrink: boolean;
    size: number | string;
    thickness: number;
};

export type PopupOptionType = {
    title: string;
    confirm: string;
    compFunc: Function;
    callbackFunc: Function;
}

// init
export const initAlertOption: AlertOptionType = {
    title: '',
    confirm: '확인',
    color: 'success',
    compFunc: () => {},
    callbackFunc: () => {},
};

export const initLoadingOption: LodingOptionType = {
    color: 'primary',
    disableShrink: false,
    size: 40,
    thickness: 3.6,
};

export const initPopupOption: PopupOptionType = {
    title: '',
    confirm: '확인',
    compFunc: () => {},
    callbackFunc: () => {},
}

export const initialViewState: StoreStateViewType = {
    alertMessage: "",
    alertOption: initAlertOption,
    loadingType: "",
    loadingOption: initLoadingOption,
    pageName: "Dashboard",
    headerTitle: "Dashboard",
    popupName: "",
    popupOption: initPopupOption,
    isShownDrawer: false,
    drawerWidth: 240,
    viewMode: ''
}

export const initialDataState: StoreStateDataType = {
    sysdate: utils.sysdate(new Date()),
    systime: utils.systime(new Date()),
    isMobile: utils.isMobile(),
    academyName: '랑아트 미술학원'
}