import React from 'react'
import { Route, IndexRedirect } from 'react-router'

import LoginPage from 'components/pages/login/LoginPage'
import TicketsPage from 'components/pages/tickets/TicketsPage'
import TicketForm from 'components/pages/tickets/TicketForm'
import App from 'components/app/App'

const routes = [
  <Route key='base' path='/' component={App}>
    <IndexRedirect to='tickets'/>
    <Route path='tickets/new' component={TicketForm}/>
    <Route path='tickets' component={TicketsPage}/>
    <Route path='login' component={LoginPage}/>
  </Route>
]

export default routes
