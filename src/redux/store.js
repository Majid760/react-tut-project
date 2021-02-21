import {createStore, applyMiddleware} from 'redux';
import rootReducer from './root.reducer';
import {logger} from 'redux-logger';
import { persistStore } from 'redux-persist';

const middlewares=[logger];

export const store=createStore(rootReducer, applyMiddleware(...middlewares));

// redux-persistant

export const persistor=persistStore(store);


export default {store,persistor};


