import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, SignUp } from './pages';
import NotFound from './shared/not-found/NotFound';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/signUp' component={SignUp} />
        <Route render={() => <NotFound />} />
      </Switch>
    </div>
  );
}

export default App;
