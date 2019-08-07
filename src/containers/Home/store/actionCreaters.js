import axios from 'axios';

export const getHomeList = () => {
    return () => {
        axios.get('http://localhost:7002/list').then((res) => {
            console.log(res)
        })
    }
}