import React from 'react'
import moment from 'moment'
import type { UserType } from 'flow/types'
import Show from 'components/pages/base/show/show'

type PropsType = {
  currentUser?: UserType
}

const UserShow = (props: PropsType) => {
  const fields = [
    { label: 'Email', value: 'email' },
    { label: 'User role', value: 'role' },
    { label: 'Created at', value: (obj: Object) => {
      return moment.unix(obj.created_at).format('MMM Do YYYY')
    } }
  ]
  return <Show resource='users' fields={fields} {...props}/>
}

export default UserShow
