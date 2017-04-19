// @flow
import type { HandleSubmitType, DispatchType } from 'flow/types'
import React from 'react'
import R from 'ramda'
import { Field, reduxForm, untouch } from 'redux-form'
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
      dispatch(UserActions.login(values.email, values.password))
    })

    const errorMessage = R.pipe(
      R.path(['errors', 0]),
      R.values,
      R.path([0]))(currentUser)

    return (
      <div className={styles.root}>
        <div className={styles.content}>
          <img className={styles.logo} src={logo}/>
          <form className={styles.form} onSubmit={onSubmit}>
              <Field className={styles.field} component={InputFormWrapper} name='email'/>
              <Field
                className={styles.field}
                component={InputFormWrapper}
                name='password'
                type='password'
                asyncErrorMessage={errorMessage}
              />
            <Button submit icon={disabled ? spin : null} className={styles.button} backgroundColor='pink'>{'SIGN IN'}</Button>
            <Button className={styles.button} icon={facebook} backgroundColor='blueFacebook'>
              {'SIGN IN via FACEBOOK'}
            </Button>
          </form>
        </div>
        <div className={styles.links}>
          <Link to='/landing' className={styles.link}>{'Don’t have an account? Create one'}</Link>
        </div>
      </div>
    )
  }
}


export default connect(state => ({
  currentUser: state.currentUser
}))(reduxForm({
  form: 'login'
})(LoginPage))
