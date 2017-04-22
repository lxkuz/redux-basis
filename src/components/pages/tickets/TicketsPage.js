import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import type { UserType, DispatchType, TicketType } from 'flow/types'
import List from 'components/pages/base/items/List'
import { buildActions } from 'helpers/ResourcesHelper'
import { Clearer } from 'helpers/ViewHelper'
import * as requestsActions from 'actions/requestsActions'

type PropsType = {
  dispatch: DispatchType,
  currentUser?: UserType,
  tickets: Array<TicketType>
}

class TicketsPage extends React.Component {
  props: PropsType
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(requestsActions.index('tickets', {}))
  }

  render() {
    const { tickets, dispatch, currentUser } = this.props
    const resource = 'tickets'
    const actions = buildActions(currentUser, dispatch, resource, ['update', 'destroy'])
    const fields = [
      { label: 'Name', value: 'name' },
      { label: 'Kind', value: (obj: Object) => {
        return obj.ticket_kind && obj.ticket_kind.name
      } }
    ]
    return (
      <div>
        <div className='form-group'>
          <Link className='btn btn-primary pull-right' to='/tickets/new'>
            New ticket
          </Link>
          <Clearer/>
        </div>
        <List items={tickets} resource={resource} fields={fields} actions={actions}/>
      </div>
    )
  }
}

export default connect(state => ({
  currentUser: state.currentUser,
  tickets: state.requests && state.requests.tickets || []
}))(TicketsPage)
