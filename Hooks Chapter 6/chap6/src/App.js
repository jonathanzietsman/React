import React from 'react';

// Import Bootstrap CSS to apply global framework styling across the app
import 'bootstrap/dist/css/bootstrap.min.css';

// Importing custom child components to be rendered within the main App layout
import JumbotronComponent from './Jumbotron';
import UserForm from './UserForm';

function App() {
  return (
    <div>
        {/* Rendering the UserForm component which contains the 
            login/registration form UI and validation logic.
        */}
        <UserForm />

        {/* The JumbotronComponent is currently commented out. 
            If uncommented, the text between the opening and closing tags 
            would automatically pass into the component as 'props.children'.
        */}
        {/* <JumbotronComponent>
          This is a long sentence, and we want to insert content
          into the jumbotron component from the outside.
        </JumbotronComponent> */}
    </div>
  );
}

export default App;