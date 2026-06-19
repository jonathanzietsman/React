import React, { Component } from "react";
import GitHub from "./GitHub";
// Importing the foundational Bootstrap CSS minified package globally so styles apply to all child components
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    render() {
        return (
            <div>
                {/* Rendering the main GitHub user search dashboard */}
                <GitHub />
            </div>
        );
    }
}

export default App;