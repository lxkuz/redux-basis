import R from 'ramda'
import React from 'react'

// import config from 'src/config'
import * as requestsActions from 'actions/requestsActions'

const btnClasses = {
  destroy: 'btn btn-danger',
  edit: 'btn btn-primary',
  show: 'btn'
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

const buildEditAction = (dispatch, resource) => {
  return {
    name: 'Delete',
    callback: (id) => {
      dispatch(requestsActions.destroy(resource, id))
    }
  }
}

const buildShowAction = (dispatch, resource) => {
  return {
    name: 'Delete',
    callback: (id) => {
      dispatch(requestsActions.destroy(resource, id))
    }
  }
}

export const buildAction = (dispatch, resource, action) => {
  switch(action) {
    case 'destroy':
      return buildDestroyAction(dispatch, resource)
    case 'edit':
      return buildEditAction(dispatch, resource)
    default:
      return buildShowAction(dispatch, resource)
  }
}

export const buildActions = (dispatch, resource, actions) => (
  R.map(R.curry(buildAction)(dispatch, resource), actions)
)

export const generateSubmitCallback = (dispatch, resource) => {
  return (event, _, values) => {
    console.log('event', event)
    console.log('values', values)
    event.preventDefault()
    dispatch(requestsActions.create(resource, values))
  }
}

