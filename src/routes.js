import React from 'react'
import { Route, IndexRedirect } from 'react-router'

import LoginPage from 'components/pages/login/LoginPage'
import TicketsPage from 'components/pages/tickets/TicketsPage'
import TicketForm from 'components/pages/tickets/TicketForm'
import UsersPage from 'components/pages/users/UsersPage'
import UserForm from 'components/pages/users/UserForm'
import ReportsPage from 'components/pages/reports/ReportsPage'
import ReportForm from 'components/pages/reports/ReportForm'
import App from 'components/app/App'

const routes = [
  <Route key='base' path='/' component={App}>
    <IndexRedirect to='tickets'/>
    <Route path='tickets/new' component={TicketForm}/>
    <Route path='tickets/:id' component={TicketForm}/>
    <Route path='tickets' component={TicketsPage}/>
    <Route path='login' component={LoginPage}/>
    <Route path='users/new' component={UserForm}/>
    <Route path='users/:id' component={UserForm}/>
    <Route path='users' component={UsersPage}/>
    <Route path='reports/new' component={ReportForm}/>
    <Route path='reports/:id' component={ReportForm}/>
    <Route path='reports' component={ReportsPage}/>
  </Route>
]

export default routes
