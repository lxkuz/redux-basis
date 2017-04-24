import R from 'ramda'
import React from 'react'
import { push } from 'react-router-redux'
import { can } from 'lib/ability'
import * as requestsActions from 'actions/requestsActions'

const btnClasses = {
  destroy: 'btn btn-danger btn-sm',
  update: 'btn btn-primary btn-sm',
  show: 'btn btn-sm'
}

export const renderAction = (item, resource, action) => {
  return (
    <a
      key={action.type}
      className={btnClasses[action.type]}
      onClick={() => (action.callback(item.id))}
    >
      {action.name}
    </a>
  )
}

export const renderActions = (item, resource, actions) => {
  return (
    <div className='btn-toolbar'>
      { R.map(R.curry(renderAction)(item, resource), actions) }
    </div>
  )
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

const buildUpdateAction = (dispatch, resource) => {
  return {
    name: 'Edit',
    type: 'update',
    callback: (id) => {
      dispatch(push(`/${resource}/${id}/edit`))
    }
  }
}

export const buildAction = (currentUser, dispatch, resource, action) => {
  if (!can(currentUser, action, resource)) return null
  switch(action) {
    case 'update':
      return buildUpdateAction(dispatch, resource)
    case 'destroy':
      return buildDestroyAction(dispatch, resource)
    default:
      return buildDestroyAction(dispatch, resource)
  }
}

export const buildActions = (currentUser, dispatch, resource, actions) => {
  return R.filter(R.identity)(R.map(R.curry(buildAction)(currentUser, dispatch, resource), actions))
}

export const generateSubmitCallback = (handleSubmit, dispatch, resource, id = null) => {
  return handleSubmit((values) => {
    if(id) {
      dispatch(requestsActions.update(resource, { id, ...values }))
    } else {
      dispatch(requestsActions.create(resource, values))
    }
  })
}
