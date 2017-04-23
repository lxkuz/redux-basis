import React from 'react'
import { connect } from 'react-redux'
import { FieldBootstrap as Field } from 'components/pages/base/form/field'
import type { DispatchType, TicketKindType, UserType } from 'flow/types'
import ItemForm from 'components/pages/base/form/ItemForm'
import * as requestsActions from 'actions/requestsActions'
import TicketAdminFields from './TicketAdminFields'

type PropsType = {
  dispatch: DispatchType,
  ticketKinds?: Array<TicketKindType>,
  currentUser?: UserType
}

class TicketsForm extends React.Component {
  props: PropsType

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(requestsActions.index('ticket_kinds', {}))
  }

  render() {
    const { dispatch, ticketKinds, currentUser } = this.props
    return (
      <ItemForm item={{}} resource={'tickets'} dispatch={dispatch} {...this.props}>
        <Field component='input' name='name' label='Name'/>
        <Field component='textarea' name='description' label='Description'/>
        <Field component='select' name='ticket_kind_id' label='Kind'>
          <option value="">Select ticket kind...</option>
          {
            ticketKinds && ticketKinds.map((ticketKind: TicketKindType) => {
              return <option value={ticketKind.id} key={ticketKind.id}>{ticketKind.name}</option>
            })
          }
        </Field>
        {
          currentUser && currentUser.role != 'customer' && <TicketAdminFields {...this.props}/>
        }
      </ItemForm>
    )
  }
}

export default connect(state => ({
  currentUser: state.currentUser,
  ticketKinds: state.requests && state.requests.ticket_kinds
}))(TicketsForm)
