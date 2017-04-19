// @flow
// version 2017.03.31

import R from 'ramda'
import queryString from 'query-string'
import type { HashType } from 'flow/types'
import { AUTH_TOKEN_KEY } from 'constants/base'

function authorizedHeaders(token: string, otherHeaders?: Object = {}) {
  return { ...otherHeaders, Authorization: `Bearer ${token}` }
}

// calls fetch(endpoint, options) with default headers and parse response data as json
//
export function jsonFetch(endpoint: string, options: HashType) {
  return fetch(endpoint, {
    ...options,
    headers: {
      ...options.headers,
      Accept: 'application/json'
    }
  })
    .then(response => response.json().then(data => ({ response, data })))
}

// calls fetch(endpoint, options) with default and auth headers and parse response data as json
//
export function authorizedJSONFetch(endpoint: string, options: HashType = {}) {
  return new Promise((resolve, reject) => {
    const token: ?string = localStorage.getItem(AUTH_TOKEN_KEY) || null
    if (typeof token === 'string') {
      resolve({
        ...options,
        headers: {
          ...options.headers,
          ...authorizedHeaders(token)
        }
      })
    }
    reject({ error: new Error('Token should be a string'), status: 401 })
  }).then((options: HashType) => jsonFetch(endpoint, options))
}

export function toFormData(params: Object, rootKey: string = '') {
  const body = new FormData()
  writeParamsToFormData(params, body, rootKey)
  return body
}

function writeParamsToFormData(object, body, rootKey) {
  R.forEach(([key, value]) => {
    const fullKey = `${rootKey}[${Number(key) || Number(key) == 0 ? '' : key}]`
    if (R.is(Object, value) && !R.isEmpty(value) && R.not(value instanceof File)) {
      writeParamsToFormData(value, body, fullKey)
    } else if (R.isNil(value)) {
      body.append(fullKey, '')
    } else if (R.is(Array, value)) {
      body.append(`${fullKey}[]`, '')
    } else {
      body.append(fullKey, value)
    }
  }, R.toPairs(object))
}

type PathType = string | (params: HashType) => string

function resolvePath(path: PathType, params: HashType): string {
  if (path instanceof Function) return path.call(this, params)
  return String(path)
}

type CrudMethodType = 'index' | 'create' | 'get' | 'update' | 'destroy'
type ConfigType = { [key: CrudMethodType]: PathType }
type BodyTypeType = 'json' | 'formData'

/** function for building crud api methods by urls
 for example:

 crudBuilder({
   index: 'http:/localhost:3000/projects'
   get: (params) => `http:/localhost:3000/projects/${params.projectId}`
   create: 'http:/localhost:3000/projects'
   update: (params) => `http:/localhost:3000/projects/${params.projectId}`
   destroy: (params) => `http:/localhost:3000/projects/${params.projectId}`
 })

 returns object
 {
    index: (params) => // does GET request to 'http:/localhost:3000/projects' and return promise
    get: (params) => // does GET request to 'http:/localhost:3000/projects/<params.projectId>' and return promise
    create: (params) => // does POST request to 'http:/localhost:3000/projects' and return promise
    update: (params) => // does PUT request to 'http:/localhost:3000/projects/<params.projectId>' and return promise
    destroy: (params) => // does DETELE request to 'http:/localhost:3000/projects/<params.projectId>' and return promise
 }

 */
export function crudBuilder(config: ConfigType, bodyType?: BodyTypeType = 'json') {
  const result = {}
  const { index, create, update, destroy, get } = config

  if (index != null) {
    result.index = (params: HashType) => {
      const path = `${resolvePath(index, params)}?${queryString.stringify(params)}`
      return authorizedJSONFetch(path, { method: 'GET' })
    }
  }

  if (create != null) {
    result.create = (params: HashType) => {
      const path = resolvePath(create, params)
      return authorizedJSONFetch(path, { method: 'POST', ...paramsToOptions(params, bodyType) })
    }
  }

  if (get != null) {
    result.get = (params: HashType) => {
      const path = `${resolvePath(get, params)}?${queryString.stringify(params)}`
      return authorizedJSONFetch(path, { method: 'GET' })
    }
  }

  if (update != null) {
    result.update = (params: HashType) => {
      const path = resolvePath(update, params)
      return authorizedJSONFetch(path, { method: 'PUT', ...paramsToOptions(params, bodyType) })
    }
  }

  if (destroy != null) {
    result.destroy = (params: HashType) => {
      const path = resolvePath(destroy, params)
      return authorizedJSONFetch(path, { method: 'DELETE' })
    }
  }

  return result
}

export function paramsToOptions(params: Object, bodyType: BodyTypeType) {
  if (bodyType === 'json') return { body: JSON.stringify(params), headers: { 'Content-Type': 'application/json' } }
  if (bodyType === 'formData') return { body: toFormData(params) }
  throw new Error(`Unacceptable bodyType: ${bodyType}`)
}

/** function for building api for resources (like in rails)
 for example:

 crudBuilder.resources('http:/localhost:3000/projects')

 returns object
 {
    index: (params) => // does GET request to 'http:/localhost:3000/projects' and return promise
    get: (params) => // does GET request to 'http:/localhost:3000/projects/<params.id>' and return promise
    create: (params) => // does POST request to 'http:/localhost:3000/projects' and return promise
    update: (params) => // does PUT request to 'http:/localhost:3000/projects/<params.id>' and return promise
    destroy: (params) => // does DETELE request to 'http:/localhost:3000/projects/<params.id>' and return promise
 }

 */
crudBuilder.resources = (basePath: PathType, only: Array<CrudMethodType>, bodyType?: BodyTypeType = 'json') => {
  const itemPath = (params: HashType) => `${resolvePath(basePath, params)}/${params.id}`

  let crudConfig = {
    index: basePath,
    create: basePath,
    get: itemPath,
    update: itemPath,
    destroy: itemPath
  }
  if (only != null) crudConfig = R.pick(only, crudConfig)

  return crudBuilder(crudConfig, bodyType)
}
