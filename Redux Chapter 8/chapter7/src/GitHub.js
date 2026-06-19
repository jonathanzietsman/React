import React from 'react';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';
import { Form, Button, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

/*
GitHub Component
-------------------------------------------------------------------------
A class-based component managing live user-search interactions with the public GitHub API.
*/
class GitHub extends React.Component {
    constructor() {
        super();
        // Internal component state dictionary tracking data payloads, entry queries, and async loading cycles.
        this.state = { 
            data: [], 
            searchTerm: '',
            isLoading: false
        };
        // Explicit binding ensures 'this' references the component instance inside the event callbacks.
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // Listens to character additions or deletions in the search input field and syncs it back to state.
    handleChange(e) {
        this.setState({
            searchTerm: e.target.value
        });
    }

    // Handles form dispatch actions
    handleSubmit(e) {
        e.preventDefault(); // Inhibits standard HTML form submissions from forcing a page refresh
        this.setState({
            isLoading: true // Activates loader spinner UI
        })
        this.getGitHubData(this.state.searchTerm); // Invokes the API request loop
    }

    // Network request routine executing queries directly to GitHub's REST endpoint
    getGitHubData(_searchTerm) {
        axios.get("https://api.github.com/search/users?q=" + _searchTerm)
            .then(res => {
                // Mutates state arrays upon resolution and disables active loader states
                this.setState({ 
                    isLoading: false,
                    data: res.data.items
                })
                console.log(res.data.items);
            });
    }

    render() {
        // Transforms the user payload array into functional React DOM structures via .map()
        const listUsers = this.state.data.map((user) => (
            /* Each mapped node requires a unique 'key' identifier at the root wrapper level 
            so React can optimize DOM reconciliation cycles.
            'd-flex' and 'align-items-start' align profile elements side-by-side using Flexbox layout.
            */
            <div key={user.id} className='d-flex align-items-start mb-4'>
                
                {/* Dynamically generates hyperlinked URL routing strings based on the structural schema of the mapped object */}
                <Nav.Link as={Link} to={`/github/user/${user.login}/${user.id}`}>
                    <img
                        width={64}
                        height={64}
                        // 'me-3' appends horizontal padding separation space to the right of the graphic
                        className='me-3' 
                        src={user.avatar_url}
                        alt={user.login}
                    />
                </Nav.Link>

                <div>
                    <h5 className="mb-0">Login: {user.login}</h5>
                    <p className="text-muted">Id: {user.id}</p>
                </div>
            </div>
        ));

        return (
            <div className='container my-4 text-white'>
                {/* Standard input field assembly */}
                <Form inline onSubmit={this.handleSubmit}>
                    <Form.Group controlId='formInlineName'>    
                        <Form.Control
                            type='text'
                            value={this.state.searchTerm}
                            placeholder='Enter Search Term'
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    {' '}
                    <Button type='submit'>
                        Search
                    </Button>
                </Form>
                
                <h3>GitHub Users Results</h3>
                
                {/* Short-circuit evaluation logic: displays the Spinner component only when isLoading evaluates to true */}
                {this.state.isLoading && (
                    <Spinner animation="border" variant="light" />
                )}
                
                {/* Displays the generated list of user elements */}
                {listUsers}
            </div>
        );
    }
}

export default GitHub;