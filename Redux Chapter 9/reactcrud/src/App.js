import React, { Component } from 'react';
import User from './User';
import UserForm from './UserForm';

// Firebase core app and feature SDK module imports
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database';

// Legacy routing infrastructure components (React Router v5 layout paradigms)
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    // Debug helper tracking the valid instantiation of the initialized application object reference 
    console.log(firebase);
  }
  
  render() {
    return (
      <div>
        {/* BrowserRouter tracks client navigation state changes through the HTML5 History API */}
        <BrowserRouter>
          <div>
            {/* Switch renders strictly the first Route match found sequentially among its children. 
              Prevents partial matching across paths without demanding exact qualifiers everywhere.
            */}
            <Switch>
              {/* Dynamic param segment path mapping: passes 'id' down context references */}
              <Route path="/edit/:id" component={UserForm} />
              
              {/* Strict route mapping setups requiring literal target path fulfillment before matching */}
              <Route exact path="/add" component={UserForm} />
              <Route exact path="/" component={User} />
              
              {/* Catch-all fallback route acting as a standard page-not-found dashboard handler */}
              <Route path="/*" component={NotFound} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

/*
NotFound View Component
-------------------------------------------------------------------------
A clean fallback UI representation rendered whenever an invalid path is tracked.
*/
class NotFound extends Component {
  render() {
    return <div>Not Found</div>
  }
}

export default App;