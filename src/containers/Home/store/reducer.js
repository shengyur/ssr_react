import { GET_NEWS_LIST } from './actionTypes';

const defaultState = {
    newsList: []
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case "change_home_list":
            return {
                ...state,
                newsList: action.list
            }
        default:
            return state;
    }
}