import React from 'react'
import { Route, Switch } from 'react-router-dom'

import HomePage from './components/views/HomePage'
import RepDetailPage from './components/views/RepDetailPage'
import NotFoundPage from './components/views/NotFoundPage'

export default (
  <Switch>
    <Route exact path='/' component={HomePage} />
    <Route exact path='/reps/:id' component={RepDetailPage} />
    <Route component={NotFoundPage} />
  </Switch>
)
