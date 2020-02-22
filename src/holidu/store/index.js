import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import apartments from "./modules/apartments";
import session from "./modules/session";
import rootSaga from "./sagas";

const rootReducer = combineReducers({ apartments, session });

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
