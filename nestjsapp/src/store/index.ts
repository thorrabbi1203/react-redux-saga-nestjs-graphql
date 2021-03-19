import { RouterState } from 'connected-react-router'
import { History } from 'history'
import { combineReducers } from 'redux'
import { all, fork } from 'redux-saga/effects'

import { heroesReducer } from './heroes/reducer'
//
import heroesSaga from './heroes/sagas'
import { HeroesState } from './heroes/types'
import { connectRouter } from './router/reducer'
import { routerSaga } from './router/saga'
import { userReducer } from './user/reducer'
import userSaga from './user/sagas'
//
import { UserState } from './user/types'

// The top-level state object
export interface ApplicationState {
  heroes: HeroesState
  user: UserState
  router: RouterState
}
export const createRootReducer = (history: History) =>
  combineReducers({
    heroes: heroesReducer,
    user: userReducer,
    router: connectRouter(history),
  })

export function* rootSaga() {
  yield all([fork(heroesSaga), fork(userSaga), fork(routerSaga)])
}
