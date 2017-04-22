// import type {  } from 'flow/types'
import React from 'react'
import type { DispatchType, NodeType } from 'flow/types'
import { reduxForm } from 'redux-form'
import { Link } from 'react-router'
import * as requestsActions from 'actions/requestsActions'
import { generateSubmitCallback } from 'helpers/ResourcesHelper'

type PropsType = {
  resource: string,
  handleSubmit: Function,
  dispatch: DispatchType,
  children?: NodeType,
  params?: Object,
  form: string,
  onSubmit?: Function
}

class ItemForm extends React.Component {
  props: PropsType
  componentDidMount() {
    if (this.props.params && this.props.params.id) {
      const { dispatch } = this.props
      dispatch(requestsActions.get(this.props.resource, { form: this.props.form, id: this.props.params.id }))
    }
  }

  // componentWillMount() {
  //   const { dispatch, currentUser } = this.props
  //   if (currentUser == null) return
  //   dispatch(initialize(FORM_KEY, convertData(currentUser), FIELDS))
  // }

  render() {
    const { resource, dispatch, handleSubmit, params } = this.props
    const onSubmit = generateSubmitCallback(handleSubmit, dispatch, resource, params && params.id)
    return (
      <form className="form-horizontal" onSubmit={onSubmit}>
        { this.props.children }
        <hr/>
        <div className='row'>
          <div className='col-xs-4'/>
          <div className='btn-toolbar col-xs-8'>
            <button className="btn btn-primary">Submit</button>
            <Link className='btn btn-default' to={`/${resource}`}>Back</Link>
          </div>
        </div>
      </form>
    )
  }
}

export default reduxForm({ form: 'ItemForm' })(ItemForm)
