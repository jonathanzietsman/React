// Beginning React (Greg Lim) — Chapter 2: Creating Components
// Components can be composed — the App component renders a child Products component.

import React, { Component } from 'react';
import Products from './Products';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello, React!</h1>
        <p>Welcome to your first React application.</p>
        {/* Custom components are used like HTML tags. React will render whatever Products returns. */}
        <Products />
      </div>
    );
  }
}

export default App;
