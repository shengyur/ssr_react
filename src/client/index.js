import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import routes from '../Routes';
import { Provider } from 'react-redux';
import { getStore } from '../store';

const App = () => {
    return (
        <Provider store={getStore()}>
            <BrowserRouter>
                <div>
                    {routes.map(route => (
                        <Route {...route} />
                    ))}
                </div>
            </BrowserRouter>
        </Provider>
    )
}
// ReactDom.render(<Home />,document.getElementById('root'));
//同构时，要把render方法换成hydrate方法，涉及到数据的脱水和注水
ReactDom.render(<App />, document.getElementById('root')); 