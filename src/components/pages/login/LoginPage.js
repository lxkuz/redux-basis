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
import { ErrorMessage } from 'helpers/ViewHelper'
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
      dispatch(UserActions.login(values.email, values.password))
    })

    const errorMessage = R.pipe(
      R.path(['errors', 0]),
      R.values,
      R.path([0]))(currentUser)

    return (
      <form autoComplete="off" className='form-horizontal' onSubmit={onSubmit}>
        <div className='row'>
          <div className='col-xs-4'/>
          <div className='col-xs-4'>
            <ErrorMessage message={errorMessage}/>
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-2'/>
          <div className='col-xs-8'>
            <Field label='Email' component='input' type='email' required name='email'/>
            <Field
              label='Password'
              component='input'
              name='password'
              required
              type='password'
            />
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-2'/>
          <div className='col-xs-4'>
            <Button type='submit' className='btn btn-primary pull-right'>SIGN IN</Button>
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
