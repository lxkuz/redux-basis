// @flow
import type { HandleSubmitType, DispatchType } from 'flow/types'
import React from 'react'
import R from 'ramda'
import { reduxForm, untouch } from 'redux-form'
import { FieldBootstrap as Field } from 'components/pages/base/form/field'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Button } from 'react-bootstrap'
import * as UserActions from 'actions/userActions'
import styles from './login-page.styl'

type PropsType = {
  currentUser?: Object,
  handleSubmit: HandleSubmitType,
  dispatch: DispatchType
}

class LoginPage extends React.Component {
  props: PropsType

  componentWillUpdate(newProps) {
    const { dispatch, currentUser } = newProps
    const errors = R.path(['errors', 0], currentUser)
    if (errors) {
      dispatch(untouch('login', 'password'))
    }
  }

  render() {
    const { currentUser = {}, handleSubmit, dispatch } = this.props

    const onSubmit = handleSubmit((values) => {
      console.log("handleSubmit!!", values)
      dispatch(UserActions.login(values.email, values.password))
    })

    const errorMessage = R.pipe(
      R.path(['errors', 0]),
      R.values,
      R.path([0]))(currentUser)

    return (
      <form className='form-horizontal' onSubmit={onSubmit}>
        <Field label='Email' component='input' name='email'/>
        <Field
          label='Password'
          component='input'
          name='password'
          type='password'
        />
        <div className='row'>
          <div className='col-xs-4'/>
          <div className='col-xs-8'>
            <Button type='submit' className='btn btn-primary' >SIGN IN</Button>
          </div>
        </div>
      </form>
    )
  }
}


export default connect(state => ({
  currentUser: state.currentUser
}))(reduxForm({
  form: 'login'
})(LoginPage))
