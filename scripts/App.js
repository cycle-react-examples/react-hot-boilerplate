import React from 'react';
import {component, Rx} from 'cycle-react';

const App = component('App', () => Rx.Observable.just(
  <h1>Hello, world.</h1>
));

export default App;
