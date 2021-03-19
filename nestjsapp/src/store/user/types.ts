
export interface User extends ApiResponse {
  id: number
  name: string
  lastName: string
  status: boolean
  accessToken: string
}

export type ApiResponse = Record<string, any>

export enum UserActionTypes {
  FETCH_REQUEST = '@@user/LOGIN',
  FETCH_SUCCESS = '@@user/LOGIN_SUCCESS',
  FETCH_ERROR = '@@user/LOGIN_ERROR',
  EMAIL_LOGIN = '@@user/LOGIN',
  PASS_LOGIN = '@@user/PASS',
  LOGOUT = '@@user/LOGOUT',
  REFRESH_TOKEN = '@@user/REFRESH_TOKEN',
}

export interface UserState {
  readonly loading: boolean
  readonly data?: User
  readonly errors?: string
}
