  // @flow
import type { UserType } from 'flow/types'

export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST'
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE'

export const USER_FETCH_REQUEST = 'USER_FETCH_REQUEST'
export const USER_FETCH_SUCCESS = 'USER_FETCH_SUCCESS'
export const USER_FETCH_FAILURE = 'USER_FETCH_FAILURE'

// export const USER_UPDATE_REQUEST = 'USER_UPDATE_REQUEST'
// export const USER_UPDATE_SUCCESS = 'USER_UPDATE_SUCCESS'
// export const USER_UPDATE_FAILURE = 'USER_UPDATE_FAILURE'

// export const USER_SIGNUP_REQUEST = 'USER_SIGNUP_REQUEST'
// export const USER_SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS'
// export const USER_SIGNUP_FAILURE = 'USER_SIGNUP_FAILURE'

// export const USER_EMAIL_CONFIRM = 'USER_EMAIL_CONFIRM'
// export const USER_CONFIRMATION_SUCCESS = 'USER_CONFIRMATION_SUCCESS'
// export const USER_CONFIRMATION_FAILURE = 'USER_CONFIRMATION_FAILURE'

export const USER_LOGOUT = 'USER_LOGOUT'

// export const index = generateIndex('user')
// export const destroy = generateDestroy('user')

// export const signUp = (user: UserType) => ({
//   type: USER_SIGNUP_REQUEST, user
// })

// export const signUpSuccess = (user: UserType) => ({
//   type: USER_SIGNUP_SUCCESS, user
// })

// export const confirmEmail = (token: string) => ({
//   type: USER_EMAIL_CONFIRM, token
// })

// export const confirmSuccess = (user: UserType) => ({
//   type: USER_CONFIRMATION_SUCCESS, user
// })

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

// export const updateUser = (user: UserType) => ({
//   type: USER_UPDATE_REQUEST, user
// })

// export const updateUserSuccess = (user: UserType) => ({
//   type: USER_UPDATE_SUCCESS, user
// })

// type ErrorsType = Array<string>

// export const signUpFailure = (errors: ErrorsType) => ({
//   type: USER_SIGNUP_FAILURE, errors
// })

export const loginFailure = (errors: ErrorsType) => ({
  type: USER_LOGIN_FAILURE, errors
})

// export const logout = () => ({
//   type: USER_LOGOUT
// })

export const fetchUserFailure = (errors: ErrorsType) => ({
  type: USER_FETCH_FAILURE, errors
})

// export const updateUserFailure = (errors: ErrorsType) => ({
//   type: USER_UPDATE_FAILURE, errors
// })

// export const confirmFailure = (errors: ErrorsType) => ({
//   type: USER_CONFIRMATION_FAILURE, errors
// })
