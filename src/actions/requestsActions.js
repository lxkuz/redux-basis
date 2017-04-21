// @flow
export const REQUEST_FAILURE = 'REQUEST_FAILURE'

export const DESTROY_REQUEST = 'DESTROY_REQUEST'
export const DESTROY_SUCCESS = 'DESTROY_SUCCESS'

export const INDEX_REQUEST = 'INDEX_REQUEST'
export const INDEX_SUCCESS = 'INDEX_SUCCESS'

export const CREATE_REQUEST = 'CREATE_REQUEST'
export const CREATE_SUCCESS = 'CREATE_SUCCESS'


export const destroy = (resource, id) => ({
  type: DESTROY_REQUEST,
  payload: { resource, id }
})

export const index = (resource, params) => ({
  type: INDEX_REQUEST,
  payload: { resource, params }
})

export const create = (resource, data) => ({
  type: CREATE_REQUEST,
  payload: { resource, data }
})

export const indexSuccess = (resource, data) => ({
  type: INDEX_SUCCESS,
  payload: { resource, data }
})

export const destroySuccess = (resource, id) => ({
  type: DESTROY_SUCCESS,
  payload: { resource, id }
})

export const requestFailure = (resource, error) => ({
  type: REQUEST_FAILURE,
  payload: { resource, error }
})