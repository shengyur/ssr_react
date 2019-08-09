import axios from 'axios';
import { GET_NEWS_LIST } from './actionTypes';

const getListAction = (list) => ({
    type: GET_NEWS_LIST,
    list
})

export const getHomeList = () => {
    return (dispatch) => {
        return axios.get('http://localhost:7001/list').then((res) => {
            let list = res.data.data.rows;
            dispatch(getListAction(list))
        })
    }
}