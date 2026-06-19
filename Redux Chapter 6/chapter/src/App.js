import react, { Component } from 'react';
// Importing our newly commented UserForm component
import UserForm from './UserForm';

class App extends Component {
  render(){
    return (
      <div>
        {/* Rendering the UserForm inside the main App container */}
        <UserForm />
      </div>
    )
  }
}

export default App;