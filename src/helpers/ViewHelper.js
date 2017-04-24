import React from 'react'
import { Link } from 'react-router'
import classnames from 'classnames'
import type { UserType } from 'flow/types'
import contentStyles from 'components/content/content.styl'
import { can } from 'lib/ability'


export const Clearer = () =>( <div className={contentStyles.clear}/> )

type NewRecordPropType = {
  resource: string,
  currentUser?: UserType,
  label: string
}

export const NewRecordLink = (props: NewRecordPropType) => {
  const { label, currentUser, resource } = props
  if (!can(currentUser, 'create', resource)) return null
  return <Link className='btn btn-primary pull-right' to={`/${resource}/new`}>{label}</Link>
}

export const renderField = (object: Object, field: Object) => {
  const value = (typeof field.value == 'function') ? field.value(object) : object[field.value]
  return (
    <tr key={field.label}>
      <td className='col-xs-4'><em>{field.label}</em></td>
      <td className='col-xs-8'>{ value }</td>
    </tr>
  )
}

export const SmartLabel = (props: Object) => {
  const { value, config } = props
  return <span className={classnames(['label', config[value]])}>{value}</span>
}

type ErrorMessageType = {
  message?: any
}

export const ErrorMessage = (props: ErrorMessageType) => {
  const { message } = props
  if(!message) return null
  if(typeof message == 'string') return <div className='control-group'><p className="text-danger">{message}</p></div>
  return (
    <div className='control-group'>
      <ul>
        {
          Object.keys(message).map(key => (
            <li key={key} className="text-danger">{`${key}: ${message[key].join(', ')}`}</li>
          ))
        }
      </ul>
    </div>
  )
}
