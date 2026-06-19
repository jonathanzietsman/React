import React from "react";
// Hooks are essential utilities for working with React Router v6/v7 within functional components
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

/*
GitHubUser Component
-------------------------------------------------------------------------
This is a functional component. It leverages modern React hooks to access 
URL parameters and programmatic routing, replacing old class-based router utilities.
*/
function GitHubUser() {

    /* useParams:
    Extracts dynamic URL parameters from the current route mapping structure.
    Deconstructs 'login' and 'id' variables directly out of the application's address path.
    Replaces: 'this.props.match.params' from legacy Router versions.
    */
    const { login, id } = useParams();

    /* useNavigate:
    Returns an imperative command instance enabling programmatic navigation changes within actions.
    Replaces: 'this.props.history.push()' from legacy Router versions.
    */
    const navigate = useNavigate();

    // Click handler that programmatically re-routes the user to the search dashboard
    function handleClick() {
        navigate("/github");
    }

    return (
        <div>
            {/* Displaying values dynamically processed from URL segments */}
            <h1>User Login: {login}</h1>
            <h2>User Id: {id}</h2>

            <Button variant="primary" onClick={handleClick}>
                Go to GitHub Users
            </Button>
        </div>
    );
}

export default GitHubUser;