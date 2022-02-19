// Imports: Dependencies
import { all } from 'redux-saga/effects'; // Imports: Redux Sagas
import saga from "./API/saga"

export function* rootSaga() {
  yield all([saga()]);
}