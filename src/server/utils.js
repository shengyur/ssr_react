import React from 'react';
import routes from '../Routes';
import { renderToString } from 'react-dom/server';
import { StaticRouter, Route } from 'react-router-dom';
import { matchRoutes } from "react-router-config";
import { Provider } from 'react-redux';
import { getStore } from '../store';

export const render = (req, res) => {
    const store = getStore();

    //拿到异步数据并且填充到store之中
    //store里面里面的数据 需要根据用户访问路径 去匹配
    //让 matchRoutes 中的方法都提前加载一遍
    const branch = matchRoutes(routes, req.path)
    let promises = [];
    branch.forEach((item) => {
        console.log("item", item.route.loadData);
        if (item.route.loadData) {
            promises.push(item.route.loadData(store))
        }
    })
    console.log("promises", promises);
    Promise.all(promises).then(() => {
        console.log("state", store.getState());
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
                <div id="root">${content}</div>
                <script src="/index.js"></script>
                <p>hello world !p</p>
            </body>
        </html>`
        )
    })
}