import React from 'react'
import R from 'ramda'
import autobind from 'autobind-decorator'
import type { HandleSubmitType, DispatchType, UserType } from 'flow/types'
import { Field, reduxForm } from 'redux-form'
import validator, { required, passwordLength } from 'src/lib/validator'
import { connectWithRequests } from 'mystand-redux-requests'

import spin from 'components/shared/button/spinner.svg'
import { signUp } from 'actions/userActions'
import Button from 'components/shared/button/Button'
import { InputFormWrapper } from 'components/shared/form/input/Input'
import userIcon from './user.svg'
import infoIcon from './info.svg'
import styles from './sign-up.styl'

type PropsType = {
  handleSubmit: HandleSubmitType,
  dispatch: DispatchType,
  currentUser?: UserType
}

type StateType = {
  status?: string
}

@autobind
class SignUpPage extends React.Component {
  props: PropsType
  state: StateType

  constructor(props: PropsType) {
    super(props)
    this.state = { status: '' }
  }

  componentDidMount() { this._mounted = true }

  componentWillUnmount() { this._mounted = false }

  onBeginProcessing() {
    if (this._mounted) this.setState({ status: 'processing' })
  }

  onEndProcessing() { if (this._mounted) this.setState({ status: '' }) }

  render() {
    const { handleSubmit, dispatch, currentUser } = this.props
    const onSubmit = handleSubmit((values) => {
      console.log(currentUser)
      if (currentUser && currentUser.email) {
        dispatch(signUp({ onEnd: this.onEndProcessing,
          onBegin: this.onBeginProcessing, email: currentUser.email, ...values }))
      }
    })
    const disabled = this.state.status == 'processing'
    return(
      <div className={styles.root}>
        <div>
          <a className={styles.signinButton} href="/login">sign in</a>
        </div>
        <div className={styles.content}>
          <div className={styles.bigTitle}>Take action</div>
          <div className={styles.smallTitle}>You're on your way to making impact!</div>
          <div className={styles.formContainer}>
            <form onSubmit={onSubmit}>
              <input type='hidden' name='name' value='idk'/>
              <input type='hidden' name='password' value='idk'/>
              <Field
                name="name"
                className={styles.formInput}
                placeholder="Full name"
                component={InputFormWrapper}
              />
              <div className={styles.inputHint}>
                <img src={userIcon} className={styles.iconHint}/>
                {'Will show publicly but you can choose to hide later'}
              </div>
              <Field
                name="password"
                className={styles.formInput}
                placeholder="Password"
                component={InputFormWrapper}
                type="password"
              />
              <div className={styles.inputHint}>
                <img src={infoIcon} className={styles.iconHint}/>
                {'Password must be greater than 6 characters'}
              </div>
              <Button submit icon={disabled ? spin : null} className={styles.signupButton}>FINISH</Button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

const validate = validator({
  password: [required('Password is required'), passwordLength('Passwords must be at least 6 characters in length')]
})

export default R.compose(
  reduxForm({
    form: 'signup',
    validate
  }),
  connectWithRequests([{
    key: 'signup',
    cacheKey: () => null
  }], state => ({ currentUser: state.currentUser }))
)(SignUpPage)
