import React from 'react';
import Cycle from 'cycle-react';
let Rx = Cycle.Rx;

let App = Cycle.createReactClass('App', () => Rx.Observable.just(
  <h1>Hello, world.</h1>
));

export default App;
