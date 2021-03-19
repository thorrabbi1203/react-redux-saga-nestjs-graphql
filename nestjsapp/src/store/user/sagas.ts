import { push } from 'react-router-redux'
import { all, call, fork, put, select, takeEvery } from 'redux-saga/effects'

// select can help u get data from the state/store inside a redux-saga function
import { customFetch } from '../../utils'
import { fetchError, fetchSuccess } from './actions'
import { UserActionTypes } from './types'

function* handleFetch(dataLogin) {
  try {
    // To call async functions, use redux-saga's `call()`.
    const res = yield call(() =>
      customFetch('/auth/login', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
          email: dataLogin.payload.email,
          password: dataLogin.payload.password,
        }),
      }),
    )

    if (res.message !== 'Login success') {
      yield put(fetchError(res.error))
    } else {
      yield put(fetchSuccess(res))
      yield put(push('/testNavigate'))
    }
  } catch (err) {
    if (err instanceof Error && err.stack) {
      yield put(fetchError(err.stack))
    } else {
      yield put(fetchError('An unknown error occured.'))
    }
  }
}

function* handleRefreshToken() {
  try {
    const state = yield select()
    console.log(state)
  } catch (err) {
    if (err instanceof Error && err.stack) {
      yield put(fetchError(err.stack))
    } else {
      yield put(fetchError('An unknown error occured.'))
    }
  }
}

function* watchFetchRequest() {
  yield takeEvery(UserActionTypes.FETCH_REQUEST, handleFetch)
}

function* watchRefreshToken() {
  yield takeEvery(UserActionTypes.REFRESH_TOKEN, handleRefreshToken)
}

function* userSaga() {
  yield all([fork(watchFetchRequest), fork(watchRefreshToken)])
}

export default userSaga
