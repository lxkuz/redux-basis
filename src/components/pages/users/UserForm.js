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

class UserForm extends React.Component {
  props: PropsType

  render() {
    const { dispatch } = this.props
    const roles = ['client', 'agent', 'admin']
    return (
      <ItemForm item={{}} resource={'users'} dispatch={dispatch}>
        <Field component='input' name='email' label='Email'/>
        <Field component='input' type='password' name='password' label='Password'/>
        <Field component='select' name='role' label='Role'>
          <option value="">Select user kind...</option>
          {
            roles.map((role: string) => {
              return <option value={role} key={role}>{role}</option>
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
  currentUser: state.currentUser
}))(UserForm)
