import React from 'react';

// Bootstrap CSS import to ensure global styling is available across the app
import 'bootstrap/dist/css/bootstrap.min.css';

// Importing our custom component that replicates the legacy Bootstrap Jumbotron behavior
import JumbotronComponent from './Jumbotron';

function App() {

  return (

    <div>

        {/* COMPOSITION (props.children):
            Any text, HTML element, or custom component placed between the opening 
            and closing tags of <JumbotronComponent> is automatically bundled into 
            a special prop called `props.children` and passed to the child component.
        */}
        <JumbotronComponent>

          This is a long sentence, and we want to insert content
          into the jumbotron component from the outside.

        </JumbotronComponent>

    </div>

  );
}

export default App;