import React from 'react';
import Routes from '../Routes';
import { renderToString } from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';

export const render = (req)=>{
    const content = renderToString(
        //需要location 手动传入路径req.path
        <StaticRouter context={{}} location={req.path}>
            {Routes}
        </StaticRouter>
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