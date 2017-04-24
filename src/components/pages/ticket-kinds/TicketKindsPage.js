import React from 'react'
import { connect } from 'react-redux'
import type { DispatchType, TicketKindType, UserType } from 'flow/types'
import List from 'components/pages/base/items/List'
import { buildActions } from 'helpers/ResourcesHelper'
import { Clearer, NewRecordLink } from 'helpers/ViewHelper'
import * as requestsActions from 'actions/requestsActions'

type PropsType = {
  dispatch: DispatchType,
  currentUser?: UserType,
  ticketKinds: Array<TicketKindType>
}

class TicketKindsPage extends React.Component {
  props: PropsType
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(requestsActions.index('ticket_kinds', {}))
  }

  render() {
    const { ticketKinds, dispatch, currentUser } = this.props
    const resource = 'ticket_kinds'
    const fields = [
      { label: 'Name', value: 'name', link: true }
    ]
    const actions = buildActions(currentUser, dispatch, resource, ['update', 'destroy'])
    return (
      <div>
        <div className='form-group'>
          <h4 className='pull-left'>Request types</h4>
          <NewRecordLink
            label='New request type'
            currentUser={currentUser}
            resource='ticket_kinds'
          />
          <Clearer/>
        </div>
        <List items={ticketKinds} resource={resource} fields={fields} actions={actions}/>
      </div>
    )
  }
}

export default connect(state => ({
  currentUser: state.currentUser,
  ticketKinds: state.requests && state.requests.ticket_kinds || []
}))(TicketKindsPage)
