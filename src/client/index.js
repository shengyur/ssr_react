import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Routes from '../Routes';

const App = ()=>{
    return (
        <BrowserRouter>
        {Routes}
        </BrowserRouter>
    )
}


// ReactDom.render(<Home />,document.getElementById('root'));
//同构时，要把render方法换成hydrate方法，涉及到数据的脱水和注水
ReactDom.hydrate(<App />,document.getElementById('root'));