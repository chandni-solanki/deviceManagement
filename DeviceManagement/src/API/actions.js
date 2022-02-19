import { createActionCreator, createDeltaAction, createSignalAction } from "../common/Redux-Utils/actions";

export const GET_TODAYS_QUOTE_API = createSignalAction('GET_TODAYS_QUOTE_API');
export const GET_TODAYS_QUOTE = createDeltaAction('GET_TODAYS_QUOTE');
export const getTodaysQuote = createActionCreator(GET_TODAYS_QUOTE);

export const UPDATE_DEVICE_LIST = createDeltaAction('UPDATE_DEVICE_LIST');
export const updateDeviceList = createActionCreator(UPDATE_DEVICE_LIST);

export const ADD_DEVICE_LIST = createDeltaAction('ADD_DEVICE_LIST');
export const addDeviceList = createActionCreator(ADD_DEVICE_LIST);

export const REMOVE_DEVICE = createDeltaAction('REMOVE_DEVICE');
export const removeDevice = createActionCreator(REMOVE_DEVICE);

export const UPDATE_APP_DATA = createDeltaAction('UPDATE_APP_DATA');
export const updateAppData = createActionCreator(UPDATE_APP_DATA);
