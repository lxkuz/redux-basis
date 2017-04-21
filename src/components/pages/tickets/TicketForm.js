import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { FieldBootstrap as Field } from 'components/pages/base/form/field'
import type { DispatchType, TicketKindType } from 'flow/types'
import ItemForm from 'components/pages/base/form/ItemForm'
import { Breaker } from 'helpers/ViewHelper'
import * as requestsActions from 'actions/requestsActions'

type PropsType = {
  dispatch: DispatchType,
  ticketKinds?: Array<TicketKindType>
}

class TicketsForm extends React.Component {
  props: PropsType

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(requestsActions.index('ticket_kinds', {}))
  }

  render() {
    const { dispatch, ticketKinds } = this.props
    return (
      <ItemForm item={{}} resource={'tickets'} dispatch={dispatch} {...this.props}>
        <Field component='input' name='name' label='Name'/>
        <Field component='input'name='description' label='Description'/>
        <Field component='select' name='ticket_kind_id' label='Kind'>
          <option value="">Select ticket kind...</option>
          {
            ticketKinds && ticketKinds.map((ticketKind: TicketKindType) => {
              return <option value={ticketKind.id} key={ticketKind.id}>{ticketKind.name}</option>
            })
          }
        </Field>
        <hr/>
        <div className='row'>
          <div className='col-xs-4'/>
          <div className='col-xs-8'>
            <button className="btn btn-primary">Submit</button>
            <Breaker/>
            <Link className='btn btn-default' to='/tickets'>Back</Link>
          </div>
        </div>
      </ItemForm>
    )
  }
}

export default connect(state => ({
  currentUser: state.currentUser,
  ticketKinds: state.requests && state.requests.ticket_kinds
}))(TicketsForm)
