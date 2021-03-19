import { all, call, fork, put, takeEvery } from 'redux-saga/effects'

import { customFetch } from '../../utils'
import { callApi } from '../../utils/api'
import { fetchError, fetchSuccess } from './actions'
import { HeroesActionTypes } from './types'

const API_ENDPOINT =
  process.env.REACT_APP_API_ENDPOINT || 'https://api.opendota.com'

function* handleFetch() {
  try {
    // To call async functions, use redux-saga's `call()`.
    const res = yield call(callApi, 'get', API_ENDPOINT, '/heroStats')

    if (res.error) {
      yield put(fetchError(res.error))
    } else {
      yield put(fetchSuccess(res))
    }
  } catch (err) {
    if (err instanceof Error && err.stack) {
      yield put(fetchError(err.stack))
    } else {
      yield put(fetchError('An unknown error occured.'))
    }
  }
}

function* handleCreate(dataHero) {
  try {
    const hero = {
      agi_gain: dataHero.payload.agi_gain || 0,
      attack_range: dataHero.payload.attack_range || 0,
      attack_rate: dataHero.payload.attack_rate || 0,
      attack_type: dataHero.payload.attack_type || 0,
      base_agi: dataHero.payload.base_agi || 0,
      base_armor: dataHero.payload.base_armor || 0,
      base_attack_max: dataHero.payload.base_attack_max || 0,
      base_attack_min: dataHero.payload.base_attack_min || 0,
      base_health: dataHero.payload.base_health || 0,
      base_health_regen: dataHero.payload.base_health_regen || 0,
      base_int: dataHero.payload.base_int || 0,
      base_mana: dataHero.payload.base_mana || 0,
      base_mana_regen: dataHero.payload.base_mana_regen || 0,
      base_mr: dataHero.payload.base_mr || 0,
      base_str: dataHero.payload.base_str || 0,
      icon: dataHero.payload.icon || 0,
      img: dataHero.payload.img || 0,
      int_gain: dataHero.payload.int_gain || 0,
      legs: dataHero.payload.legs || 0,
      localized_name: dataHero.payload.localized_name || 0,
      name: dataHero.payload.name || 0,
      move_speed: dataHero.payload.move_speed || 0,
      primary_attr: dataHero.payload.primary_attr || 0,
      projectile_speed: dataHero.payload.projectile_speed || 0,
      roles: dataHero.payload.roles.map(i => i) || 0,
      str_gain: dataHero.payload.str_gain || 0,
      turn_rate: dataHero.payload.turn_rate || 0,
    }
    console.log(hero)
    const res = yield call(() =>
      customFetch('/hero', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTYwMjA5NDI3OSwiZXhwIjoxNjAyMTgwNjc5fQ.05PzO1Zd2da-9RoQXMlPQYA8zYQSF7MQ06SYIQWXQoA',
        },
        body: JSON.stringify(hero),
      }),
    )

    if (res.message !== 'Hero created') {
      yield put(fetchError(res.error))
    }
  } catch (err) {
    if (err instanceof Error && err.stack) {
      yield put(fetchError(err.stack))
    } else {
      yield put(fetchError('An unknown error occured.'))
    }
  }
}
function* watchFetchRequest() {
  yield takeEvery(HeroesActionTypes.FETCH_REQUEST, handleFetch)
}

function* watchCreateHero() {
  yield takeEvery(HeroesActionTypes.CREATE_HERO, handleCreate)
}

function* userSaga() {
  yield all([fork(watchFetchRequest), fork(watchCreateHero)])
}

export default userSaga
