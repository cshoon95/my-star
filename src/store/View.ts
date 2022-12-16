import { createAction } from "@reduxjs/toolkit";
import { 
    initialViewState, 
    AlertOptionType, 
    LodingOptionType, 
    initAlertOption, 
    PopupOptionType, 
    initPopupOption  
} from '../type/Type';

// types
export const SHOW_ALERT = "view/SHOW_ALERT";
export const HIDE_ALERT = "view/HIDE_ALERT";
export const SHOW_LOADING = "view/SHOW_LOADING";
export const HIDE_LOADING = "view/HIDE_LOADING";
export const MOVE_PAGE = "view/MOVE_PAGE";
export const SHOW_POPUP = "view/SHOW_POPUP";
export const HIDE_POPUP = "view/HIDE_POPUP";
export const SHOW_DRAWER = "view/SHOW_DRAWER";
export const HIDE_DRAWER = "view/HIDE_DRAWER";
export const CHANGE_MODE = "view/CHANGE_MODE";

// actions
export const showAlert = createAction<{
    message: string;
    alertOption?: AlertOptionType;
}>(SHOW_ALERT);

export const hideAlert = createAction(HIDE_LOADING);

export const showLoading = createAction<{
    loadingType?: string;
    loadingOption?: LodingOptionType;
}>(SHOW_LOADING);

export const hideLoading = createAction<{
    loadingType?: string;
}>(HIDE_LOADING);

export const movePage = createAction<{
    pageName: string;
    headerTitle: string;
}>(MOVE_PAGE);

export const showPopup = createAction<{
    popupName: string;
    popupOption?: PopupOptionType;
}>(SHOW_POPUP);

export const hidePopup = createAction(HIDE_POPUP);

export const changeMode = createAction<{
    viewMode: string;
}>(CHANGE_MODE)

export const showDrawer = createAction(SHOW_DRAWER);
export const hideDrawer = createAction(HIDE_DRAWER);

const viewReducer = (state = initialViewState, action: any) => {
    switch (action.type) {
        case SHOW_LOADING:
            return {
                ...state,
                loadingType: action.payload.loadingType
            }
        case HIDE_LOADING:
            return {
                ...state,
                loadingType: ''
            }
        case SHOW_ALERT:
            const alertParam: AlertOptionType = action.payload.alertOption;
            const alertOption: AlertOptionType = {
                title: (alertParam && alertParam.title) || '',
                confirm: (alertParam && alertParam.confirm) || '확인',
                color: (alertParam && alertParam.color) || 'success',
                compFunc: (alertParam && alertParam.compFunc) || (() => {}),
                callbackFunc:
                    (alertParam && alertParam.callbackFunc) || (() => {}),
            };
            return {
                ...state,
                alertMessage: action.payload.message,
                alertOption: alertOption
            };
        case HIDE_ALERT:
            return {    
                ...state,
                alertMessage: '',
                alertOption: initAlertOption
            };
        case MOVE_PAGE:
            return {
                ...state,
                pageName: action.payload.pageName,
                headerTitle: action.payload.headerTitle
            }
        case SHOW_POPUP:
            const popupParam: PopupOptionType = action.payload.popupOption;
            const popupOption: PopupOptionType = {
                title: (popupParam && popupParam.title) || '',
                confirm: (popupParam && popupParam.confirm) || '확인',
                compFunc: (popupParam && popupParam.compFunc) || (() => {}),
                callbackFunc: (popupParam && popupParam.callbackFunc) || (() => {}),
            };
            return {
                ...state,
                popupName: action.payload.popupName,
                popupOption: popupOption
            }
        case HIDE_POPUP:
            return {
                ...state,
                popupName: '',
                popupOption: initPopupOption
            }
        case SHOW_DRAWER:
            return {
                ...state,
                isShownDrawer: true
            }
        case HIDE_DRAWER:
            return {
                ...state,
                isShownDrawer: false
            }
        case CHANGE_MODE:
            return {
                ...state,
                viewMode: action.payload.viewMode
            }
        default:
            return state;
    }
}

export default viewReducer;