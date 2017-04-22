  // @flow
import config from 'src/config'
import type { UserType } from 'flow/types'
import { crudBuilder, jsonFetch, paramsToOptions } from './ApiHelper'

const { backendRoot } = config

const CRUD = ['create', 'index', 'get', 'update', 'destroy']

export default {
  user: {
    login: (email: string, password: string) => {
      return jsonFetch(`${backendRoot}/auth`, { method: 'POST', ...paramsToOptions({ email, password }, 'json') })
        .then(({ data }) => {
          if (data.errors) throw data.errors
          return {
            user: data.user,
            authToken: data.auth_token
          }
        }).catch((errors) => {throw errors})
    },
    confirmation: token => (
      jsonFetch(`${backendRoot}/user/confirmation?confirmation_token=${token}`, { method: 'GET' })
    )
  },

  signUp: (user: UserType) => (
    jsonFetch(`${backendRoot}/sign_up`, { method: 'POST', ...paramsToOptions(user, 'json') })
  ),

  tickets: crudBuilder.resources(`${backendRoot}/tickets`, CRUD),
  users: crudBuilder.resources(`${backendRoot}/users`, CRUD),
  ticket_kinds: crudBuilder.resources(`${backendRoot}/ticket_kinds`, CRUD),
  reports: crudBuilder.resources(`${backendRoot}/reports`, CRUD)
}
