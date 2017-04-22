import React from 'react'
import { Link } from 'react-router'
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
