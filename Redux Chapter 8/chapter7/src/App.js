// Import React and Component base class
import React, { Component } from "react";

// This is the component we render at /github
import GitHub from "./GitHub";

/*
React Router v7 (same API as v6)

TEXTBOOK USED:
  BrowserRouter, Route, Switch

WE USE:
  BrowserRouter, Routes, Route

WHY?
- Switch was removed after v5
- It is replaced with <Routes>
*/
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

/*
React-Bootstrap components
These give us prebuilt Bootstrap components as React components
*/
import { Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import GitHubUser from "./GitHubUser";

/*
App Component
This is the root component of our application.
We render <Header /> here so routing and navigation are available everywhere.
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
This contains:
1. The Navigation bar
2. The Routing logic
*/
class Header extends Component {
    render() {
        return (
            /*
            BrowserRouter wraps the entire application.
            It enables client-side routing (no page refresh).
            */
            <BrowserRouter>
                {/*
                Bootstrap Navbar
                bg="light" → light background
                expand="lg" → becomes collapsible on small screens
                */}
                <Navbar bg="light" expand="lg">
                    {/*
                    TEXTBOOK USED:
                        <Navbar.brand href="#home">

                    WE USE:
                        as={Link} to="/"

                    WHY?
                    - Using href reloads the page.
                    - Using Link keeps navigation inside React (Single Page App behavior).
                    */}
                    <Navbar.Brand as={Link} to="/">
                        React-Bootstrap
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav">
                        {/*
                        TEXTBOOK USED:
                            className="mr-auto"

                        Bootstrap 5 changed spacing utilities:
                            mr-auto → me-auto
                        */}
                        <Nav className="me-auto">
                            {/*
                            TEXTBOOK USED:
                                <Nav.Link href="/">

                            WE USE:
                                as={Link} to="/"

                            WHY?
                            - href causes full reload
                            - Link gives client-side routing
                            */}
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
                TEXTBOOK USED:
                    <Switch>
                        <Route component={GitHub} />

                WE USE:
                    <Routes>
                        <Route element={<GitHub />} />

                WHY?
                - Switch was removed in React Router v6+
                - "component=" prop was removed
                - Now we pass JSX using element={<Component />}
                */}
                <Routes>
                    {/*
                    Notice:
                    element={<GitHub />}  ← JSX, not component={GitHub}
                    */}

                    <Route path="/github/user/:login/:id" element={<GitHubUser />} />

                    <Route path="/github" element={<GitHub />} />

                    {/*
                    TEXTBOOK USED:
                        exact path="/"

                    In v6+:
                        exact is removed.
                        Routes automatically match exactly.
                    */}
                    <Route path="/" element={<Home />} />

                    {/*
                    TEXTBOOK USED:
                        path="/*"

                    In v6+:
                        wildcard is simply "*"
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
TEXTBOOK returned plain text:
    return( Home )

We return JSX because React components must return valid JSX.
*/
class Home extends Component {
    render() {
        return <h2>Home</h2>;
    }
}

/*
NotFound Component
This renders when no route matches.
*/
class NotFound extends Component {
    render() {
        return <div>Not Found</div>;
    }
}

class Test extends Component {
    render() {
        return <h1>Test</h1>;
    }
}