import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import type { UserType, DispatchType } from 'flow/types'
import * as userActions from 'actions/userActions'
import Navigation from './Navigation'
import NavLink from './NavLink'

type PropsType = {
  currentUser?: UserType,
  dispatch: DispatchType
}


const Header = (props: PropsType) => {
  const { dispatch, currentUser } = props
  const Logout = () => {
    dispatch(userActions.logout())
  }

  const userLabel = (user: UserType) => {
    if(!user) return null
    return (
      <li>
        <Link to={`/users/${user.id}`}>
          {`${user.email} ( ${user.role} )`}
        </Link>
      </li>
    )}

  const baseUrl = currentUser ? '/' : '/login'

  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link to={baseUrl} className="navbar-brand">TestApp</Link>
        </div>
        <Navigation/>
        <ul className="pull-right nav navbar-nav">
          {
            !currentUser && <NavLink className='pull-right' to='/login'>
              Login
            </NavLink>
          }
          {userLabel(currentUser)}
          {
            currentUser && <NavLink onClick={Logout} to='/login' className='pull-right'>
              Logout
            </NavLink>
          }
        </ul>
      </div>
    </nav>
  )
}

export default connect( state => ({ currentUser: state.currentUser }))(Header)
