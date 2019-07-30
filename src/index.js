import express from 'express';
import React from 'react';
import Home from './containers/Home';
import { renderToString } from 'react-dom/server';

const app = express();
const content = renderToString(<Home />);

app.get('/',function(req,res){
    res.send(`
        <!DOCTYPE html> 
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Document</title>
        </head>
        <body>
            <h1>
                first ssr
            </h1>
            ${content}
            <p>hello world</p>
        </body>
        </html>
    `)
})

const server = app.listen(3000)