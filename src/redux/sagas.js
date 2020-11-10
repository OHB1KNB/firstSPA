import { takeEvery, put } from 'redux-saga/effects';

import { REQUEST_DATA } from './types';
import { fetchData } from './actions';
import data from '../mocks/catalog.json';

export function* sagaWatcher() {
   yield takeEvery(REQUEST_DATA, sagaWorker)
}

function* sagaWorker() {
   yield put(fetchData(data));
}