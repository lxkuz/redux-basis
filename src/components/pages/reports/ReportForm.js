import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { FieldBootstrap as Field } from 'components/pages/base/form/field'
import type { DispatchType } from 'flow/types'
import ItemForm from 'components/pages/base/form/ItemForm'
import { Breaker } from 'helpers/ViewHelper'

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
        <hr/>
        <div className='row'>
          <div className='col-xs-4'/>
          <div className='col-xs-8'>
            <button className="btn btn-primary">Submit</button>
            <Breaker/>
            <Link className='btn btn-default' to='/reports'>Back</Link>
          </div>
        </div>
      </ItemForm>
    )
  }
}

export default connect(state => ({
  currentUser: state.currentUser,
  reportKinds: state.requests && state.requests.report_kinds
}))(ReportsForm)
