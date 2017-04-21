import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { reduxForm, Field } from 'redux-form'
import R from 'ramda'
import type { DispatchType, TicketType } from 'flow/types'
import ItemForm from 'components/pages/base/form/ItemForm'
import { buildActions } from 'helpers/ResourcesHelper'
import * as requestsActions from 'actions/requestsActions'
import styles from './tickets'


type PropsType = {
  dispatch: DispatchType
}

class TicketsForm extends React.Component {
  props: PropsType
  render() {
    return (
      <ItemForm item={{}} resource={'tickets'} dispatch={this.props.dispatch}>
        <Field component='input' name='name'/>
        <Field component='input'name='desciption'/>
      </ItemForm>
    )
  }
}

export default R.pipe(reduxForm({ form: 'ItemForm' }), connect(state => ({
  currentUser: state.currentUser
})))(TicketsForm)
