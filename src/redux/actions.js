import { SWITCH_PAGE } from './types';

export function switchPage(pageID) {
    return {
        type: SWITCH_PAGE,
        payload: pageID
    };
}