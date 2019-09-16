import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage, SignUpPage } from './pages';
import NotFound from './shared/not-found/NotFound';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/signUp' component={SignUpPage} />
        <Route render={() => <NotFound />} />
      </Switch>
    </div>
  );
}

export default App;
