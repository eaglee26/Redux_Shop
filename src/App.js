import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './containers/HomePage';

const App = () => {
  return (
    <div >
      <Switch>
        <Route path="/" component={Home} exact />
      </Switch>
    </div>
  );
};

export default App;
