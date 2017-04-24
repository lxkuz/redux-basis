// import type {  } from 'flow/types'
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import type { FieldType, DispatchType, UserType, NodeType } from 'flow/types'
import * as requestsActions from 'actions/requestsActions'
import { renderField } from 'helpers/ViewHelper'
import { can } from 'lib/ability'

type PropsType = {
  resource: string,
  object?: Object,
  fields: Array<FieldType>,
  params: Object,
  buttons?: Array<NodeType>,
  currentUser?: UserType,
  dispatch: DispatchType
}

class Show extends React.Component {
  props: PropsType
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(requestsActions.get(this.props.resource, { id: this.props.params.id }))
  }

  render() {
    const { object, fields, currentUser, resource, params, buttons } = this.props
    if (!object) return null
    const canUpdate = can(currentUser, 'update', resource)
    return (
      <div>
        <table className='table table-bordered table-striped'>
          <tbody>
            { fields.map((field: Object) => renderField(object, field))}
          </tbody>
        </table>
        <div className='btn-toolbar'>
          <Link className='btn btn-default' to={`/${resource}`}>Back</Link>
          { canUpdate && <Link className='btn btn-primary' to={`/${resource}/${params.id}/edit`}>Edit</Link> }
          { buttons }
        </div>
      </div>
    )
  }
}

export default connect((state) => {
  return {
    currentUser: state.currentUser,
    object: state.requests && state.requests.showObject
  }
})(Show)
