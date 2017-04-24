import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import type { UserType, DispatchType, TicketType } from 'flow/types'
import List from 'components/pages/base/items/List'
import { buildActions } from 'helpers/ResourcesHelper'
import { SmartLabel, Clearer, NewRecordLink } from 'helpers/ViewHelper'
import * as requestsActions from 'actions/requestsActions'



export const TicketStatusLabel = (props: string) => {
  const statusHash = {
    closed: 'label-success',
    waiting: 'label-warning'
  }
  return (
    <SmartLabel value={props.status} config={statusHash}/>
  )
}

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
      { label: 'Name', value: 'name', link: true },
      { label: 'Status', value: (obj: TicketType) => ( <TicketStatusLabel status={obj.status}/> ) },
      {
        label: 'Type',
        value: (obj: Object) => ( obj.ticket_kind && obj.ticket_kind.name )
      }
    ]
    if (currentUser && currentUser.role != 'customer') {
      fields.push({ label: 'Customer', value: (obj: Object) => {
        return obj.customer.email
      } })
    }

    return (
      <div>
        <div className='form-group'>
          <h4 className='pull-left'>Requests</h4>
          <NewRecordLink
            label='New request'
            currentUser={currentUser}
            resource='tickets'
          />
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
