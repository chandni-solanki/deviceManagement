import { createSelector } from "reselect";
import { APP_REDUCER, DEVICE_LIST_REDUCER, TODAYS_QUOTE } from "./const";

const deviceListReducer = state => state[DEVICE_LIST_REDUCER];
const quoteReducer = state => state[TODAYS_QUOTE]
const appReducer = state => state[APP_REDUCER]

export const deviceListSelector = () => createSelector(
    deviceListReducer,
  reducer => reducer || [],
);

export const isDarkThemeSelector = () => createSelector(
  appReducer,
  reducer => {
    return reducer.isDarkTheme || false
});

export const quoteOfTheDaySelector = () => createSelector(
  quoteReducer,
  reducer => {
   return reducer?.data?.data[0] || {}},
);

export const showToastSelector = () => createSelector(
  appReducer,
  reducer => {
    return reducer.showToast || false
  });