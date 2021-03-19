import * as React from 'react'
import { Route, Switch } from 'react-router-dom'

import App from './App'
import Page404 from './components/src-Auth/Page404/Page404'
import PageTestNaviage from './components/src-Auth/PageTestNaviage'

const Routes: React.SFC = () => (
  <Switch>
    <Route component={App} exact path="/" />
    <Route component={PageTestNaviage} exact path="/testNavigate" />
    <Route component={Page404} />
  </Switch>
)

export default Routes
