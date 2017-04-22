import React from 'react'
import { connect } from 'react-redux'
import { FieldBootstrap as Field } from 'components/pages/base/form/field'
import ItemForm from 'components/pages/base/form/ItemForm'

type PropsType = {
  dispatch: DispatchType
}

class TicketKindForm extends React.Component {
  props: PropsType

  render() {
    const { dispatch } = this.props
    return (
      <ItemForm item={{}} resource={'ticket_kinds'} dispatch={dispatch} {...this.props}>
        <Field component='input' name='name' label='Name'/>
      </ItemForm>
    )
  }
}

export default connect(state => ({
  currentUser: state.currentUser
}))(TicketKindForm)
