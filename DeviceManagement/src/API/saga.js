import { call, put, takeLatest } from 'redux-saga/effects';
import * as actions from './actions';
import * as api from './api'

function * getTodaysQuote() {
    try {
      yield put(actions.GET_TODAYS_QUOTE_API.request());
      const mainResponse = yield call(api.getTodaysQuote);
      yield put(actions.GET_TODAYS_QUOTE_API.success(mainResponse));
      console.log("mainResponse ",mainResponse);
      return mainResponse;
    } catch (err) {
      console.log("err ",err)
      yield put(actions.GET_TODAYS_QUOTE_API.failure(err));
    }
}

export default function * doctorWatchers() {
    yield takeLatest(actions.GET_TODAYS_QUOTE, getTodaysQuote);
  }