import { Reducer } from 'redux'

import { HeroesActionTypes, HeroesState } from './types'

// Type-safe initialState!
export const initialState: HeroesState = {
  data: [],
  errors: undefined,
  loading: false,
}
const reducer: Reducer<HeroesState> = (state = initialState, action) => {
  switch (action.type) {
    case HeroesActionTypes.FETCH_REQUEST: {
      return { ...state, loading: true }
    }
    case HeroesActionTypes.FETCH_SUCCESS: {
      return { ...state, loading: false, data: action.payload }
    }
    case HeroesActionTypes.FETCH_ERROR: {
      return { ...state, loading: false, errors: action.payload }
    }
    case HeroesActionTypes.CREATE_HERO: {
      return { ...state, loading: false }
    }
    default: {
      return state
    }
  }
}
export { reducer as heroesReducer }
