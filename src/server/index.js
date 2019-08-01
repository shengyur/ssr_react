import express from 'express';
import {render} from './utils';

const app = express();
//使用express去访问静态文件时，到根目录的public中找
app.use(express.static('public'));

//* 表示匹配所有路由路径
app.get('*',function(req,res){
    res.send(render(req))
})

const server = app.listen(3000)