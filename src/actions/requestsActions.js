// @flow
export const REQUEST_FAILURE = 'REQUEST_FAILURE'
export const FORM_REQUEST_FAILURE = 'FORM_REQUEST_FAILURE'
export const DESTROY_REQUEST = 'DESTROY_REQUEST'
export const DESTROY_SUCCESS = 'DESTROY_SUCCESS'

export const INDEX_REQUEST = 'INDEX_REQUEST'
export const INDEX_SUCCESS = 'INDEX_SUCCESS'

export const CREATE_REQUEST = 'CREATE_REQUEST'
export const CREATE_SUCCESS = 'CREATE_SUCCESS'

export const UPDATE_REQUEST = 'UPDATE_REQUEST'
export const UPDATE_SUCCESS = 'UPDATE_SUCCESS'

export const GET_REQUEST = 'GET_REQUEST'
export const GET_SUCCESS = 'GET_SUCCESS'

export const destroy = (resource, id) => ({
  type: DESTROY_REQUEST,
  payload: { resource, id }
})

export const index = (resource, params) => ({
  type: INDEX_REQUEST,
  payload: { resource, params }
})

export const get = (resource, params) => ({
  type: GET_REQUEST,
  payload: { resource, params }
})

export const getSuccess = (resource, data, form) => ({
  type: GET_SUCCESS,
  payload: { resource, data, form }
})

export const create = (resource, data) => ({
  type: CREATE_REQUEST,
  payload: { resource, data }
})

export const update = (resource, data) => ({
  type: UPDATE_REQUEST,
  payload: { resource, data }
})

export const indexSuccess = (resource, data) => ({
  type: INDEX_SUCCESS,
  payload: { resource, data }
})

export const createSuccess = (resource, data) => ({
  type: CREATE_SUCCESS,
  payload: { resource, data }
})

export const updateSuccess = (resource, data) => ({
  type: UPDATE_SUCCESS,
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

export const formRequestFailure = (resource, error) => ({
  type: FORM_REQUEST_FAILURE,
  payload: { resource, data: error }
})

