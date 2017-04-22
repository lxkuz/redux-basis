import React from 'react'
import { Route, IndexRedirect } from 'react-router'

import LoginPage from 'components/pages/login/LoginPage'
import TicketsPage from 'components/pages/tickets/TicketsPage'
import TicketForm from 'components/pages/tickets/TicketForm'
import TicketShow from 'components/pages/tickets/TicketShow'

import TicketKindsPage from 'components/pages/ticket-kinds/TicketKindsPage'
import TicketKindForm from 'components/pages/ticket-kinds/TicketKindForm'
import TicketKindShow from 'components/pages/ticket-kinds/TicketKindShow'

import UsersPage from 'components/pages/users/UsersPage'
import UserForm from 'components/pages/users/UserForm'
import UserShow from 'components/pages/users/UserShow'

import ReportsPage from 'components/pages/reports/ReportsPage'
import ReportForm from 'components/pages/reports/ReportForm'
import ReportShow from 'components/pages/reports/ReportShow'

import App from 'components/app/App'

const routes = [
  <Route key='base' path='/' component={App}>
    <IndexRedirect to='tickets'/>
    <Route path='ticket_kinds/new' component={TicketKindForm}/>
    <Route path='ticket_kinds/:id/edit' component={TicketKindForm}/>
    <Route path='ticket_kinds/:id' component={TicketKindShow}/>
    <Route path='ticket_kinds' component={TicketKindsPage}/>
    <Route path='tickets/new' component={TicketForm}/>
    <Route path='tickets/:id/edit' component={TicketForm}/>
    <Route path='tickets/:id' component={TicketShow}/>
    <Route path='tickets' component={TicketsPage}/>
    <Route path='login' component={LoginPage}/>
    <Route path='users/new' component={UserForm}/>
    <Route path='users/:id/edit' component={UserForm}/>
    <Route path='users/:id' component={UserShow}/>
    <Route path='users' component={UsersPage}/>
    <Route path='reports/new' component={ReportForm}/>
    <Route path='reports/:id/edit' component={ReportForm}/>
    <Route path='reports/:id' component={ReportShow}/>
    <Route path='reports' component={ReportsPage}/>
  </Route>
]

export default routes
