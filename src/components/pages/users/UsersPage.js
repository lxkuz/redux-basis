import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import type { DispatchType, UserType } from 'flow/types'
import List from 'components/pages/base/items/List'
import { buildActions } from 'helpers/ResourcesHelper'
import { Clearer } from 'helpers/ViewHelper'
import * as requestsActions from 'actions/requestsActions'

type PropsType = {
  dispatch: DispatchType,
  users: Array<UserType>,
  currentUser?: UserType
}

class UsersPage extends React.Component {
  props: PropsType
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(requestsActions.index('users', {}))
  }

  render() {
    const { users, dispatch, currentUser } = this.props
    const resource = 'users'
    const actions = buildActions(currentUser, dispatch, resource, ['update', 'destroy'])
    const fields = [
      { label: 'Email', value: 'email' },
      { label: 'User role', value: 'role' }
    ]
    return (
      <div>
        <div className='form-group'>
          <Link className='btn btn-primary pull-right' to='/users/new'>
            New user
          </Link>
          <Clearer/>
        </div>
        <List items={users} fields={fields} resource={resource} actions={actions}/>
      </div>
    )
  }
}

export default connect(state => ({
  currentUser: state.currentUser,
  users: state.requests && state.requests.users || []
}))(UsersPage)
