import { createAction } from "@reduxjs/toolkit";
import { initialViewState, AlertOptionType, LodingOptionType, initAlertOption } from '../type/Type';

// types
export const SHOW_ALERT = "view/SHOW_ALERT";
export const HIDE_ALERT = "view/HIDE_ALERT";
export const SHOW_LOADING = "view/SHOW_LOADING";
export const HIDE_LOADING = "view/HIDE_LOADING";

// actions
export const showAlert = createAction<{
    message: string,
    alertOption?: AlertOptionType
}>(SHOW_ALERT);

export const hideAlert = createAction(HIDE_LOADING);

export const showLoading = createAction<{
    loadingType: string,
    loadingOption?: LodingOptionType
}>(SHOW_LOADING)

export const hideLoading = createAction<{
    loadingType?: string
}>(HIDE_LOADING)

const viewReducer = (state = initialViewState, action: any) => {
    switch (action.type) {
        case SHOW_LOADING:
            return {
                ...state,
                loadingName: action.payload.loadingName
            }
        case HIDE_LOADING:
            return {
                ...state,
                loadingName: ''
            }
        case SHOW_ALERT:
            const param: AlertOptionType = action.payload.alertOption;
            const option: AlertOptionType = {
                title: (param && param.title) || '',
                confirm: (param && param.confirm) || '확인',
                color: (param && param.color) || 'success',
                compFunc: (param && param.compFunc) || (() => {}),
                callbackFunc:
                    (param && param.callbackFunc) || (() => {}),
            };
            return {
                ...state,
                alertMessage: action.payload.message,
                alertOption: option
            };
        case HIDE_ALERT:
            return {    
                ...state,
                alertMessage: '',
                alertOption: initAlertOption
            };
        default:
            return state;
    }
}

export default viewReducer;