import R from 'ramda'
import React from 'react'
import type { ResourceActionType, DispatchType, UserType } from 'flow/types'
import { push } from 'react-router-redux'
import { can } from 'lib/ability'
import * as requestsActions from 'actions/requestsActions'

const btnClasses = {
  destroy: 'btn btn-danger btn-sm',
  update: 'btn btn-primary btn-sm',
  show: 'btn btn-sm'
}

export const renderAction = (item: Object,
resource: string, action: ResourceActionType) => {
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

export const renderActions = (item: Object, resource: string, actions: Array<ResourceActionType>) => {
  return (
    <div className='btn-toolbar'>
      { R.map(R.curry(renderAction)(item, resource), actions) }
    </div>
  )
}

const buildDestroyAction = (dispatch: DispatchType, resource: string) => {
  return {
    name: 'Delete',
    type: 'destroy',
    callback: (id: string) => {
      dispatch(requestsActions.destroy(resource, id))
    }
  }
}

const buildUpdateAction = (dispatch: DispatchType, resource: string) => {
  return {
    name: 'Edit',
    type: 'update',
    callback: (id: string) => {
      dispatch(push(`/${resource}/${id}/edit`))
    }
  }
}

export const buildAction = (currentUser: ?UserType,
dispatch: DispatchType, resource: string, action: string) => {
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

export const buildActions = (currentUser: ?UserType,
dispatch: DispatchType,
resource: string, actions: Array<string>) => {
  return R.filter(R.identity)(R.map(
    R.curry(buildAction)(currentUser, dispatch, resource), actions))
}

export const generateSubmitCallback = (handleSubmit: Function,
dispatch: DispatchType, resource: string, id: ?string = null) => {
  return handleSubmit((values: Object) => {
    if(id) {
      dispatch(requestsActions.update(resource, { id, ...values }))
    } else {
      dispatch(requestsActions.create(resource, values))
    }
  })
}
