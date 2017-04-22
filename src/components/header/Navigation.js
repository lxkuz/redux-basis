import React from 'react'
import { connect } from 'react-redux'
import type { UserType } from 'flow/types'
import { can } from 'lib/ability'
import NavLink from './NavLink'

type PropType = {
  currentUser?: UserType
}

const Navigation = (props: PropType) => {
  const { currentUser } = props
  if (!currentUser) return null
  return (
    <ul className="nav navbar-nav">
      { can(currentUser, 'read', 'tickets') && <NavLink to='/tickets'>Tickets</NavLink> }
      { can(currentUser, 'read', 'users') && <NavLink to='/users'>Users</NavLink> }
      { can(currentUser, 'read', 'reports') && <NavLink to='/reports'>Reports</NavLink> }
      { can(currentUser, 'read', 'ticket_kinds') && <NavLink to='/ticket_kinds'>Ticket kinds</NavLink> }
    </ul>
  )
}

export default connect((state) => {
  return { currentUser: state.currentUser }
})(Navigation)
