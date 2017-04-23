import React from 'react'
import { connect } from 'react-redux'
import { FieldBootstrap as Field } from 'components/pages/base/form/field'
import type { DispatchType } from 'flow/types'
import ItemForm from 'components/pages/base/form/ItemForm'
import { USER_ROLES } from 'lib/constants'

type PropsType = {
  dispatch: DispatchType
}

class UserForm extends React.Component {
  props: PropsType

  render() {
    const { dispatch } = this.props
    return (
      <ItemForm item={{}} resource={'users'} dispatch={dispatch} {...this.props}>
        <Field component='input' name='email' label='Email'/>
        <Field component='input' type='password' name='password' label='Password'/>
        <Field component='select' name='role' label='Role'>
          {
            USER_ROLES.map((role: string) => {
              return <option value={role} key={role}>{role}</option>
            })
          }
        </Field>
      </ItemForm>
    )
  }
}

export default connect(state => ({
  currentUser: state.currentUser
}))(UserForm)
