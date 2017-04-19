import React from 'react'
import { Route, IndexRedirect } from 'react-router'

import LoginPage from 'components/pages/login/LoginPage'
import App from 'components/app/App'

const routes = [
  <Route key='base' path='/'>
    <Route path='login' component={LoginPage}/>
  </Route>
]

export default routes
