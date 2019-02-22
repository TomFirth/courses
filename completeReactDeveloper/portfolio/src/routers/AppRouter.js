import React from 'React'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Contact, Header, Home, Portfolio, PortfolioItem, NotFound } from '../components'

const AppRouter = () => (
  <BrowserRouter>
    <React.Fragment>
      <Header />
      <Switch>
        <Route path='/' exact={true} component={Home} />
        <Route path='/portfolio' exact={true} component={Portfolio} />
        <Route path='/portfolio/:id' component={PortfolioItem} />
        <Route path='/contact' component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </React.Fragment>
  </BrowserRouter>
)

export default AppRouter
