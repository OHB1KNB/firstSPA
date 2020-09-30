import { FETCH_DATA, SWITCH_PAGE } from './types';

const initialState = {
    pages: {},
    currentPage: 0
};

export const pageReducer = (state=initialState, action) => {
    switch (action.type) {
        case SWITCH_PAGE:
            return {...state, currentPage: action.payload};
        case FETCH_DATA:
            return {...state, pages: action.payload};

        default: return state;
    }
};