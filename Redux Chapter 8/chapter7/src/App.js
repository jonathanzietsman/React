// Import React and Component base class
import React, { Component } from "react";

// Import custom application views
import GitHub from "./GitHub";
import GitHubUser from "./GitHubUser";

/*
React Router v7 (same API as v6)
-------------------------------------------------------------------------
TEXTBOOK USED:   BrowserRouter, Route, Switch
WE USE:          BrowserRouter, Routes, Route

WHY?
- <Switch> was removed after v5 and replaced with <Routes>.
- <Routes> handles relative routing and structural optimizations natively.
*/
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

/*
React-Bootstrap components & Bootstrap CSS
Imports the UI components and the foundational minified CSS stylesheet.
*/
import { Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

/*
App Component
-------------------------------------------------------------------------
The root component of the application. It acts as an entry layout shell
by mounting the <Header /> component, which orchestrates global navigation.
*/
class App extends Component {
    render() {
        return (
            <div>
                <Header />
            </div>
        );
    }
}

export default App;

/*
Header Component
-------------------------------------------------------------------------
Houses the global Navigation bar UI and the corresponding client-side Routing logic.
*/
class Header extends Component {
    render() {
        return (
            /*
            <BrowserRouter>:
            Wraps the execution context to sync the UI with the browser URL using the HTML5 History API.
            Enables client-side routing (Single Page Application behavior without full page reloads).
            */
            <BrowserRouter>
                {/*
                Bootstrap Navbar configuration:
                - bg="light": Background theme applied from Bootstrap utility classes.
                - expand="lg": Sets the breaking point where the menu collapses into a hamburger icon.
                */}
                <Navbar bg="light" expand="lg">
                    {/*
                    The 'as={Link}' attribute polymorphically changes the HTML tag rendered by 
                    React-Bootstrap from an anchor tag (<a>) into a React Router <Link> component.
                    'to="/"' specifies the destination route without triggering a full page refresh.
                    */}
                    <Navbar.Brand as={Link} to="/">
                        React-Bootstrap
                    </Navbar.Brand>

                    {/* Responsive hamburger menu toggle button */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    {/* Collapsible container for navbar links */}
                    <Navbar.Collapse id="basic-navbar-nav">
                        {/*
                        'me-auto' (Margin End Auto) forces subsequent navbar content to the far right.
                        This replaces the outdated Bootstrap 4 'mr-auto' (Margin Right Auto).
                        */}
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">
                                Home
                            </Nav.Link>

                            <Nav.Link as={Link} to="/github">
                                GitHub
                            </Nav.Link>
                            
                            <Nav.Link as={Link} to="/test">
                                Test
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                {/*
                <Routes>:
                Acts as a container for individual <Route> elements. It looks through all its children 
                routes and automatically finds the best matching path to render.
                */}
                <Routes>
                    {/* Dynamic Routing Parameter: 
                    ':login' and ':id' act as URL parameters captured during runtime. 
                    Example: /github/user/john_doe/12345
                    */}
                    <Route path="/github/user/:login/:id" element={<GitHubUser />} />

                    {/* Standard feature view route */}
                    <Route path="/github" element={<GitHub />} />

                    {/* In React Router v6+, the 'exact' prop is deprecated. 
                    All route matching is exact by default unless explicitly appended with wildcards.
                    */}
                    <Route path="/" element={<Home />} />

                    {/* Fallback Catch-All Route:
                    The asterisk '*' functions as a wildcard capturing any URL configuration 
                    not explicitly declared above, serving as a 404 handler.
                    */}
                    <Route path="*" element={<NotFound />} />
                    
                    <Route path="/test" element={<Test />} />
                </Routes>
            </BrowserRouter>
        );
    }
}

/*
Home Component
-------------------------------------------------------------------------
Renders the primary landing view markup.
*/
class Home extends Component {
    render() {
        return <h2>Home</h2>;
    }
}

/*
NotFound Component
-------------------------------------------------------------------------
Fallback visual feedback displayed when an invalid URL path is entered.
*/
class NotFound extends Component {
    render() {
        return <div>Not Found</div>;
    }
}

/*
Test Component
-------------------------------------------------------------------------
A basic component used for checking alternative route setups.
*/
class Test extends Component {
    render() {
        return <h1>Test</h1>;
    }
}