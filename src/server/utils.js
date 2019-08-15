import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

export const render = (store, routes,req) => {
    const content = renderToString(
        //需要location 手动传入路径req.path
        <Provider store={store}>
            <StaticRouter context={{}} location={req.path}>
                <span>
                    {routes.map(route => (
                        <Route {...route} />
                    ))}
                </span>
            </StaticRouter>
        </Provider>
    );

    return `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <title>Document</title>
            </head>
            <body>
                <div id="root">${content}</div>
                <script src="/index.js"></script>
                <p>hello world !p</p>
                <script>
                    debugger;
                    window.context= {
                        state:${JSON.stringify(store.getState())}
                    }
                </script>
            </body>
        </html>`
}