import express from 'express';
import { render } from './utils';
import { getStore } from '../store';
import { matchRoutes } from "react-router-config";
import routes from '../Routes';

const app = express();
//使用express去访问静态文件时，到根目录的public中找
app.use(express.static('public'));

//* 表示匹配所有路由路径
app.get('*', function (req, res) {
    const store = getStore();
    const branch = matchRoutes(routes, req.path)
    let promises = [];
    branch.forEach((item) => {
        if (item.route.loadData) {
            promises.push(item.route.loadData(store))
        }
    })

    Promise.all(promises).then(() => {
        res.send(render(store, routes, req))
    })

})

const server = app.listen(3000)