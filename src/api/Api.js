  // @flow
import config from 'src/config'
import type { UserType } from 'flow/types'
import { crudBuilder, jsonFetch, authorizedJSONFetch, paramsToOptions } from './ApiHelper'

const { backendRoot } = config

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
    ),
    ...crudBuilder.resources(`${backendRoot}/users`, ['index', 'get', 'update', 'destroy'], 'formData')
  },

  signUp: (user: UserType) => (
    jsonFetch(`${backendRoot}/sign_up`, { method: 'POST', ...paramsToOptions(user, 'json') })
  ),

  tickets: crudBuilder.resources(`${backendRoot}/tickets`, ['index', 'create', 'destroy'])

  // streamItems: crudBuilder.resources(`${backendRoot}/stream_items`, ['index', 'get']),

  // userAct: crudBuilder.resources(({ actId }) => `${backendRoot}/acts/${actId}/user_acts`, ['create', 'get']),

  // createUserActWithNewAct: crudBuilder.resources(`${backendRoot}/user_acts`, ['create'], 'formData'),

  // toggleSaved: crudBuilder.resources(({ actId }) => `${backendRoot}/acts/${actId}/toggle`, ['create']),

  // comments: crudBuilder.resources(
  //   ({ actId, userActId }) => `${backendRoot}/acts/${actId}/user_acts/${userActId}/comments`,
  //   ['index', 'get', 'create']
  // ),

  // organizations: crudBuilder.resources(`${backendRoot}/organizations`,
  //   ['index', 'get', 'create', 'destroy'], 'formData'),
  // tags: crudBuilder.resources(`${backendRoot}/tags`, ['index', 'get', 'destroy']),
}
