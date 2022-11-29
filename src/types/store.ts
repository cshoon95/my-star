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
    alertMessage: string;
    alertOptions: AlertOptionType;
    loadingType: string;
    loadingOptions: LodingOptionType;
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