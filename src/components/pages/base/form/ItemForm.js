// import type {  } from 'flow/types'
import React from 'react'
import { Link } from 'react-router'
import type { TickerType, DispatchType } from 'flow/types'
import { reduxForm } from 'redux-form'
import * as requestsActions from 'actions/requestsActions'
import { generateSubmitCallback } from 'helpers/ResourcesHelper'
import styles from './form.styl'

type PropsType = {
  resource: string,
  item: TickerType,
  dispatch: DispatchType,
  children?: Array<Object>,
  params?: Object,
  form: string
}

class ItemForm extends React.Component {
  constructor(props: PropsType) {
    super(props)
    if (props.params && props.params.id) {
      const { dispatch } = props
      dispatch(requestsActions.get(props.resource, { form: props.form, id: props.params.id }))
    }
  }

  // componentWillMount() {
  //   const { dispatch, currentUser } = this.props
  //   if (currentUser == null) return
  //   dispatch(initialize(FORM_KEY, convertData(currentUser), FIELDS))
  // }

  render() {
    const { item, resource, dispatch, handleSubmit } = this.props
    const onSubmit = this.props.onSubmit || generateSubmitCallback(handleSubmit, dispatch, resource)
    return (
      <form className="form-horizontal" onSubmit={onSubmit}>
        { this.props.children }
      </form>
    )
  }
}

export default reduxForm({ form: 'ItemForm' })(ItemForm)
