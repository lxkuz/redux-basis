import React from 'react'
import { connect } from 'react-redux'
import { FieldBootstrap as Field } from 'components/pages/base/form/field'
import type { DispatchType } from 'flow/types'
import ItemForm from 'components/pages/base/form/ItemForm'

type PropsType = {
  dispatch: DispatchType
}

class ReportsForm extends React.Component {
  props: PropsType

  render() {
    const { dispatch } = this.props
    return (
      <ItemForm item={{}} resource={'reports'} dispatch={dispatch} {...this.props}>
        <Field component='input' name='title' label='Name'/>
      </ItemForm>
    )
  }
}

export default connect(state => ({
  currentUser: state.currentUser,
  reportKinds: state.requests && state.requests.report_kinds
}))(ReportsForm)
