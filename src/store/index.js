import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { reducer as homeReducer } from '../containers/Home/store';

const reducer = combineReducers({
    home: homeReducer
})

export const getServerStore = () => {
    return createStore(reducer,applyMiddleware(thunk))
}

export const getClientStore = () => {
    debugger;
    const defaultState = window.context.state;
    console.log("defaultState",defaultState)
    return createStore(reducer, defaultState,composeWithDevTools(
        applyMiddleware(thunk))
    )
}

