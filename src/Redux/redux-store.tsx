import { Action, applyMiddleware, combineReducers, compose, createStore } from "redux";
import { dialogsReducer } from './dialogs_reducer';
import profileReducer from "./profile_reducer";
import sidebar from './sidebar_reducer';
import usersReducer from './users_reducer';
import authReducer from './auth_reducer';
import appReducer from './app_reducer'
import thunkMiddleware, { ThunkAction } from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    sidebar: sidebar,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});

type ReducersType = typeof reducers;
export type AppStateType = ReturnType<ReducersType>;

export type InferActionsTypes<T> = T extends { [key: string]: (...arg: any[]) => infer U } ? U : never

export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

// @ts-ignore
window.__store = store;
export default store;