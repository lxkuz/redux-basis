import R from 'ramda'
import React from 'react'

// import config from 'src/config'
import * as requestsActions from 'actions/requestsActions'

const btnClasses = {
  destroy: 'btn btn-danger btn-sm pull-right',
  edit: 'btn btn-primary btn-sm pull-right',
  show: 'btn btn-sm pull-right'
}

export const renderAction = (item, resource, action) => {
  return (
    <div
      key={action.type}
      className={btnClasses[action.type]}
      onClick={() => (action.callback(item.id))}
    >
      {action.name}
    </div>
  )
}

export const renderActions = (item, resource, actions) => {
  return R.map(R.curry(renderAction)(item, resource), actions)
}

const buildDestroyAction = (dispatch, resource) => {
  return {
    name: 'Delete',
    type: 'destroy',
    callback: (id) => {
      dispatch(requestsActions.destroy(resource, id))
    }
  }
}

export const buildAction = (dispatch, resource, action) => {
  switch(action) {
    case 'destroy':
      return buildDestroyAction(dispatch, resource)
    default:
      return buildDestroyAction(dispatch, resource)
  }
}

export const buildActions = (dispatch, resource, actions) => (
  R.map(R.curry(buildAction)(dispatch, resource), actions)
)

export const generateSubmitCallback = (handleSubmit, dispatch, resource) => {
  return handleSubmit((values) => {
    dispatch(requestsActions.create(resource, values))
  })
}
