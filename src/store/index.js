import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { reducer as homeReducer } from '../containers/Home/store';

const reducer = combineReducers({
    home: homeReducer
})

export const getStore = () => {
    return createStore(reducer, composeWithDevTools(
        applyMiddleware(thunk))
    )
}

