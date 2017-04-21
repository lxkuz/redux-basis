import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import type { DispatchType, reportType } from 'flow/types'
import List from 'components/pages/base/items/List'
import { buildActions } from 'helpers/ResourcesHelper'
import { Clearer } from 'helpers/ViewHelper'
import * as requestsActions from 'actions/requestsActions'

type PropsType = {
  dispatch: DispatchType,
  reports: Array<reportType>
}

class ReportsPage extends React.Component {
  props: PropsType
  componentWillMount() {
    const { dispatch } = this.props
    dispatch(requestsActions.index('reports', {}))
  }

  render() {
    const { reports, dispatch } = this.props
    const resource = 'reports'
    const actions = buildActions(dispatch, resource, ['destroy'])
    return (
      <div>
        <div className='form-group'>
          <Link className='btn btn-primary pull-right' to='/reports/new'>
            New report
          </Link>
          <Clearer/>
        </div>
        <List items={reports} resource={resource} actions={actions}/>
      </div>
    )
  }
}

export default connect(state => ({
  currentUser: state.currentUser,
  reports: state.requests && state.requests.reports || []
}))(ReportsPage)
