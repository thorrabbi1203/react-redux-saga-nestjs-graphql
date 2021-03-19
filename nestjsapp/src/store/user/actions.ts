import { action } from 'typesafe-actions'

import { User, UserActionTypes } from './types'

export const fetchRequest = dataLogin =>
  action(UserActionTypes.FETCH_REQUEST, dataLogin)

export const fetchSuccess = (data: User) =>
  action(UserActionTypes.FETCH_SUCCESS, data)
export const fetchError = (message: string) =>
  action(UserActionTypes.FETCH_ERROR, message)
export const logout = () => action(UserActionTypes.LOGOUT)
export const refreshToken = () => action(UserActionTypes.REFRESH_TOKEN)
