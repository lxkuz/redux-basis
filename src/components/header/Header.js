import React from 'react'
import { connect } from 'react-redux'
import type { UserType, DispatchType } from 'flow/types'
import * as userActions from 'actions/userActions'
import NavLink from './NavLink'

type PropsType = {
  currentUser?: UserType,
  dispatch: DispatchType
}


const Header = (props: PropsType) => {
  const { dispatch } = props
  const Logout = () => {
    dispatch(userActions.logout())
  }
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">CrossoverTestApp</a>
        </div>
        <ul className="nav navbar-nav">
          <NavLink to='/tickets'>Tickets</NavLink>
          <NavLink to='/users'>Users</NavLink>
          <NavLink to='/reports'>Reports</NavLink>
        </ul>
        <ul className="pull-right nav navbar-nav">
          {
            !props.currentUser && <NavLink className='pull-right' to='/login'>
              Login
            </NavLink>
          }
          {
            props.currentUser && <NavLink onClick={Logout} className='pull-right'>
              Logout
            </NavLink>
          }
        </ul>
      </div>
    </nav>
  )
}

export default connect( state => ({ currentUser: state.currentUser }))(Header)
