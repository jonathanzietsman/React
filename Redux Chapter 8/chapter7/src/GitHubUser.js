import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

function GitHubUser() {

    // Replaces this.props.match.params
    const { login, id } = useParams();

    // Replaces this.props.history.push
    const navigate = useNavigate();

    function handleClick() {
        navigate("/github");
    }

    return (
        <div>
            <h1>User Login: {login}</h1>
            <h2>User Id: {id}</h2>

            <Button variant="primary" onClick={handleClick}>
                Go to GitHub Users
            </Button>
        </div>
    );
}

export default GitHubUser;
