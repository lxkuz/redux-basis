import React from 'react'
import { connect } from 'react-redux'
import type { DispatchType, UserType } from 'flow/types'
import List from 'components/pages/base/items/List'
import { buildActions } from 'helpers/ResourcesHelper'
import { SmartLabel, Clearer, NewRecordLink } from 'helpers/ViewHelper'
import * as requestsActions from 'actions/requestsActions'

type PropsType = {
  dispatch: DispatchType,
  users: Array<UserType>,
  currentUser?: UserType
}

const UserRoleLabel = (props: Object) => {
  const config = {
    admin: 'label-danger',
    agent: 'label-success',
    customer: 'label-warning'
  }
  return <SmartLabel value={props.role} config={config}/>
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
      { label: 'Email', value: 'email', link: true },
      { label: 'User role', value: (obj: UserType) => ( <UserRoleLabel role={obj.role}/>) }
    ]
    return (
      <div>
        <div className='form-group'>
          <h4 className='pull-left'>Users</h4>
          <NewRecordLink
            label='New user'
            currentUser={currentUser}
            resource='users'
          />
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
