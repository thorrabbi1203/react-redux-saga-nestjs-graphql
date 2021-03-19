import { Reducer } from 'redux'

import { UserActionTypes, UserState } from './types'

// Type-safe initialState!
export const initialState: UserState = {
  data: undefined,
  errors: undefined,
  loading: false,
}
const reducer: Reducer<UserState> = (state = initialState, action) => {
  switch (action.type) {
    case UserActionTypes.FETCH_REQUEST: {
      return { ...state, loading: true }
    }
    case UserActionTypes.FETCH_SUCCESS: {
      return { ...state, loading: false, data: action.payload }
    }
    case UserActionTypes.FETCH_ERROR: {
      return { ...state, loading: false, errors: action.payload }
    }
    case UserActionTypes.LOGOUT: {
      return {
        ...state,
        data: undefined,
      }
    }
    case UserActionTypes.REFRESH_TOKEN: {
      return state
    }
    default: {
      return state
    }
  }
}

// Instead of using default export, we use named exports. That way we can group these exports
// inside the `index.js` folder.
export { reducer as userReducer }
