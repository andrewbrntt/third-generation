import React from 'react';
import { Route, Switch } from 'react-router';

export default (
  <Switch>
    <Route exact path='/' />
    <Route path='/about' />
    <Route path='/roofing' />
    <Route path='/remodel' />
    <Route path='/siding' />
    <Route path='/repairs' />
    <Route path='/contact' />
    <Route path='/basement-photos' />
    <Route path='/bathroom-photos' />
    <Route path='/kitchen-photos' />
    <Route path='/roofing-photos' />
    <Route path='/other-photos' />
    <Route path='/reviews' />
    <Route path='/emergency-service' />
    <Route path='/covid' />
    <Route path='*' />
  </Switch>
);