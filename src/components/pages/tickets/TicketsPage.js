import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import type { DispatchType, TicketType } from 'flow/types'
import List from 'components/pages/base/items/List'
import { buildActions } from 'helpers/ResourcesHelper'
import * as requestsActions from 'actions/requestsActions'
import styles from './tickets'

type PropsType = {
  dispatch: DispatchType,
  tickets: Array<TicketType>
}

class TicketsPage extends React.Component {
  constructor(props: PropsType) {
    super(props)
    const { dispatch } = props
    dispatch(requestsActions.index('tickets', {}))
  }

  render() {
    const { tickets, dispatch } = this.props
    const resource = 'tickets'
    const actions = buildActions(dispatch, resource, ['destroy'])
    return (
      <div className={styles.container}>
        <p>
          <Link className='btn btn-primary pull-right' to='/tickets/new'>
            { 'New ticket' }
          </Link>
        </p>
        <List items={tickets} resource={resource} actions={actions}/>
      </div>
    )
  }
}

export default connect(state => ({
  currentUser: state.currentUser,
  tickets: state.requests && state.requests.tickets || []
}))(TicketsPage)
