// Imports: Dependencies
import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import {compose} from 'recompose';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
// Imports: Redux Root Reducer
import rootReducer from './rootReducer';
import { rootSaga } from './rootSaga';
import { DEVICE_LIST_REDUCER } from './API/const';
// Imports: Redux Root Saga

const DEBUG = true;
const logger = createLogger({collapsed: true});

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist,
        // actionsCreators, serialize...
      })
    : compose;

    const persistConfig = {
      key: 'root',
      storage: AsyncStorage,
      whitelist: [DEVICE_LIST_REDUCER]
    };

const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();
let store;
if (DEBUG) {
  store = createStore(persistedReducer, composeEnhancers(applyMiddleware(sagaMiddleware, logger)));
} else {
  store = createStore(persistedReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
}
sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);
export { store, persistor};
