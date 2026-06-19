import React from 'react';

// Bootstrap CSS import - styling framework used across components
import 'bootstrap/dist/css/bootstrap.min.css';

// Importing our custom components (currently commented out but available for use)
// import JumbotronComponent from './Jumbotron';
// import UserForm from './UserForm';

import GitHub from './GitHub';

/**
 * App Component: The main root layout of the application.
 * It renders the core structure and toggles which view/component is active.
 */
function App() {

  return (
    <div>
        {/* The text between the component tags becomes props.children
            inside the JumbotronComponent when active.
        */}
        {/* <UserForm /> */}
        {/* <JumbotronComponent>

          This is a long sentence, and we want to insert content
          into the jumbotron component from the outside.

        </JumbotronComponent> */}

        {/* Currently rendering the GitHub search feature as the main view */}
        <GitHub />
    </div>
  );
}

export default App;