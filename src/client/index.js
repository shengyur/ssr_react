import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Routes from '../Routes';
import {Provider} from 'react-redux';
import {getStore} from '../store';

const App = ()=>{
    return (
        <Provider store={getStore()}>
            <BrowserRouter>
            {Routes}
            </BrowserRouter>
        </Provider>
    )
}
// ReactDom.render(<Home />,document.getElementById('root'));
//同构时，要把render方法换成hydrate方法，涉及到数据的脱水和注水
ReactDom.hydrate(<App />,document.getElementById('root'));