import { combineReducers } from 'redux';
import reducer from "./API/reducer"
import * as actions from "./API/actions"
import { APP_REDUCER } from './API/const';

const initialState = {
  isDarkTheme: false,
  showToast: false
}
export function appReducer(state = initialState, action) {
  switch (action.type) {
      case actions.UPDATE_APP_DATA:
          return {...state, 
            ...action.data}
      default:
          return state;
  }
}

export default combineReducers({
  ...reducer,
  [APP_REDUCER]: appReducer
});
