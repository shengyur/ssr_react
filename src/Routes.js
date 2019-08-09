import React from 'react';
import { Route } from 'react-router-dom';
import Home from './containers/Home';
import Login from './containers/Login';

export default [
    {
        path: "/",
        component: Home,
        exact: true,
        loadData: (data) => Home.loadData(data),
        key: "home",
        // routes: [{//多级路由
        //     path: "/test",
        //     component: Login,
        //     exact: true,
        //     key: 'test'
        // }]
    },
    {
        path: "/login",
        component: Login,
        exact: true,
        key: 'login'
    }
]

//客户端渲染时的路由配置 
// export default (
//     <div>
//         <Route path="/" exact component={Home}></Route>
//         <Route path="/login" exact component={Login}></Route>
//     </div> 
// )