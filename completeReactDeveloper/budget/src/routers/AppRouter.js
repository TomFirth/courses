import React from 'React'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Add, Dashboard, Edit, Help, NotFound, Header } from '../components'

const AppRouter = () => (
  <BrowserRouter>
    <React.Fragment>
      <Header />
      <Switch>
        <Route path='/' exact={true} component={Dashboard} />
        <Route path='/create' component={Add} />
        <Route path='/edit/:id' component={Edit} />
        <Route path='/help' component={Help} />
        <Route component={NotFound} />
      </Switch>
    </React.Fragment>
  </BrowserRouter>
)

export default AppRouter
