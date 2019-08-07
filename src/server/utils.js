import React from 'react';
import Routes from '../Routes';
import { renderToString } from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {getStore} from '../store';

export const render = (req)=>{

    const content = renderToString(
        //需要location 手动传入路径req.path
        <Provider store = {getStore()}>
            <StaticRouter context={{}} location={req.path}>
                {Routes}
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
        </body>
        </html>
    `
}