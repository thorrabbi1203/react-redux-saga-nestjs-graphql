import { push } from 'react-router-redux'
import { all, fork, put, takeEvery } from 'redux-saga/effects'

import { RouterActionTypes } from './type'

function* handleRouterNavigate(pathName) {
  yield put(push(pathName.payload))
}

function* watchRouterNavigate() {
  yield takeEvery(RouterActionTypes.ROUTER_REQUEST, handleRouterNavigate)
}

function* routerSaga() {
  yield all([fork(watchRouterNavigate)])
}

export { routerSaga }
