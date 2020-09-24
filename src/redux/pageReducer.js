import { SWITCH_PAGE } from './types';
import initPages from '../mocks/pages.json';

const initialState = {
    pages: initPages,
    currentPage: 0
};

export const pageReducer = (state=initialState, action) => {
    switch (action.type) {
        case SWITCH_PAGE:
            return {...state, currentPage: action.payload};
        default: return state;
    }
};