  // @flow
import type { UserType } from 'flow/types'

export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST'
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE'

export const USER_FETCH_REQUEST = 'USER_FETCH_REQUEST'
export const USER_FETCH_SUCCESS = 'USER_FETCH_SUCCESS'
export const USER_FETCH_FAILURE = 'USER_FETCH_FAILURE'

export const USER_LOGOUT = 'USER_LOGOUT'

export const login = (email: string, password: string) => ({
  type: USER_LOGIN_REQUEST, email, password
})

export const loginSuccess = (user: UserType) => ({
  type: USER_LOGIN_SUCCESS, user
})

export const fetchUser = (id: number) => ({
  type: USER_FETCH_REQUEST, id
})

export const fetchUserSuccess = (user: UserType) => ({
  type: USER_FETCH_SUCCESS, user
})

export const loginFailure = (errors: Object) => ({
  type: USER_LOGIN_FAILURE, errors
})

export const logout = () => ({
  type: USER_LOGOUT
})

export const fetchUserFailure = (errors: Object) => ({
  type: USER_FETCH_FAILURE, errors
})
