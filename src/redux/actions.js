import { FETCH_DATA, REQUEST_DATA, SWITCH_PAGE } from './types';

export function switchPage(pageID) {
    return {
        type: SWITCH_PAGE,
        payload: pageID
    };
}

export function fetchData(data) {
    return {
        type: FETCH_DATA,
        payload: data
    };
}

export function requestData() {
    return {
        type: REQUEST_DATA
    };
}