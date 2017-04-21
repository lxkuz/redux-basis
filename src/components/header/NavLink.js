import React from 'react'
import R from 'ramda'
import type { DispatchType } from 'flow/types'
import { Link } from 'react-router'
import { connect } from 'react-redux'

type PropsType = {
  children?: any,
  to?: string,
  activeClassName?: string,
  routing: Object,
  dispatch: DispatchType
}

const NavLink = (props: PropsType) => {
  const activeClass = props.activeClassName || 'active'
  const activeLiClass = window.location.pathname.match(props.to) ? activeClass : ''
  return (
    <li className={activeLiClass}>
      <Link {...R.omit(['routing', 'dispatch'], props)}>
        {props.children}
      </Link>
    </li>
  )
}

export default connect(state => ({ routing: state.routing }))(NavLink)
