import React from 'react';

// Bootstrap CSS import
import 'bootstrap/dist/css/bootstrap.min.css';

// Importing our custom component
import JumbotronComponent from './Jumbotron';
import UserForm from './UserForm';

function App() {

  return (

    <div>

        {/* 
            The text between the tags becomes props.children
            inside the JumbotronComponent
        */}
        <UserForm />
        {/* <JumbotronComponent>

          This is a long sentence, and we want to insert content
          into the jumbotron component from the outside.

        </JumbotronComponent> */}

    </div>

  );
}

export default App;