import React from 'react'
import moment from 'moment'
import { connect } from 'react-redux'
import type { DispatchType, reportType, UserType } from 'flow/types'
import List from 'components/pages/base/items/List'
import { Clearer, NewRecordLink } from 'helpers/ViewHelper'
import { buildActions } from 'helpers/ResourcesHelper'
import * as requestsActions from 'actions/requestsActions'

type PropsType = {
  dispatch: DispatchType,
  reports: Array<reportType>,
  currentUser?: UserType
}

class ReportsPage extends React.Component {
  props: PropsType
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(requestsActions.index('reports', {}))
  }

  render() {
    const { reports, dispatch, currentUser } = this.props
    const resource = 'reports'
    const actions = buildActions(currentUser, dispatch, resource, ['update', 'destroy'])
    const fields = [
      { label: 'Title', value: 'title', link: true },
      { label: 'Created at', value: (obj: Object) => {
        return moment.unix(obj.created_at).format('MMM Do YYYY')
      } }
    ]
    return (
      <div>
        <div className='form-group'>
          <h4 className='pull-left'>Reports</h4>
          <NewRecordLink
            label='New report'
            currentUser={currentUser}
            resource='reports'
          />
          <Clearer/>
        </div>
        <List items={reports} resource={resource} fields={fields} actions={actions}/>
      </div>
    )
  }
}

export default connect(state => ({
  currentUser: state.currentUser,
  reports: state.requests && state.requests.reports || []
}))(ReportsPage)
