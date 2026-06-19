import React from 'react';
import axios from 'axios'; // Axios is used to send HTTP requests to external APIs
import { Spinner } from 'react-bootstrap';
import { Form, Button } from 'react-bootstrap';

class GitHub extends React.Component {
    constructor() {
        super();
        // Component state dictionary to track input queries, data results, and loading cycles
        this.state = { 
            data: [], 
            searchTerm: '',
            isLoading: false
        };
        // Explicitly binding methods to the class instance so 'this' remains accessible inside callbacks
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // Listens to keyboard input within the search field and synchronizes it with local state
    handleChange(e) {
        this.setState({
            searchTerm: e.target.value
        });
    }

    // Form submission interceptor
    handleSubmit(e) {
        e.preventDefault(); // Prevents standard HTML browser form refresh behaviors
        this.setState({
            isLoading: true // Activates the loading spinner UI flag
        })
        this.getGitHubData(this.state.searchTerm); // Triggers network request
    }

    // Core business logic method executing async HTTP requests to the public GitHub API
    getGitHubData(_searchTerm) {
        axios.get("https://api.github.com/search/users?q=" + _searchTerm)
            .then(res => {
                // Resolves payload arrays, updates data state, and deactivates loading spin cycle
                this.setState({ 
                    isLoading: false,
                    data: res.data.items
                })
                console.log(res.data.items);
            });
    }

    render() {
        // Transforms the user payload data array into structured UI elements using .map()
        const listUsers = this.state.data.map((user) => (
            /* Each mapped item must contain a unique 'key' identifier at its root element 
               to help React's virtual DOM track node changes efficiently.
               - 'd-flex' & 'align-items-start': Flexbox utilities replacing legacy layout methods 
                 to force user avatar images and data text blocks to sit cleanly side-by-side.
            */
            <div key={user.id} className='d-flex align-items-start mb-4'>
                
                {/* Hyperlink pointing directly to the user's personal GitHub web profile page */}
                <a href={user.html_url}>
                    <img
                        width={64}
                        height={64}
                        // 'me-3' (Margin End) is modern Bootstrap 5 utility shorthand for 'margin-right'
                        className='me-3' 
                        src={user.avatar_url}
                        alt={user.login}
                    />
                </a>

                <div>
                    <h5 className="mb-0">Login: {user.login}</h5>
                    <p className="text-muted">Id: {user.id}</p>
                </div>
            </div>
        ));

        return (
            /* Bootstrap wrappers:
               - 'container': Centers content horizontally and adds responsive page gutters.
               - 'my-4': Margin applied symmetrically across top and bottom vertical axes.
               - 'text-white': Applies white coloration to child typography strings.
            */
            <div className='container my-4 text-white'>
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
                
                {/* Conditional Short-Circuit evaluation:
                   If 'this.state.isLoading' evaluates to true, the right side is evaluated and rendered.
                   Replaces standard legacy dependencies with React-Bootstrap native loading indicators.
                */}
                {this.state.isLoading && (
                    <Spinner animation="border" variant="light" />
                )}
                
                {/* Outputs the generated user list collection mapping built above */}
                {listUsers}
            </div>
        );
    }
}

export default GitHub;