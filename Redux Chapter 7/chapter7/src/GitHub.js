import React from 'react';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';
import { Form, Button } from 'react-bootstrap';

class GitHub extends React.Component {
    constructor() {
        super();
        this.state = { 
            data: [], 
            searchTerm: '',
            isLoading: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            searchTerm: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            isLoading: true
        })
        this.getGitHubData(this.state.searchTerm);
    }

    getGitHubData(_searchTerm) {
        axios.get("https://api.github.com/search/users?q=" + _searchTerm)
            .then(res => {
                this.setState({ 
                    isLoading: false,
                    data: res.data.items
                })
                console.log(res.data.items);
            });
    }

    render() {
        const listUsers = this.state.data.map((user) => (
            // DEMO NOTE: Textbook used <Media>. Since it's removed in Bootstrap 5, 
            // we use 'd-flex' to force the image and text to sit side-by-side.
            <div key={user.id} className='d-flex align-items-start mb-4'>
                
                <a href={user.html_url}>
                    <img
                        width={64}
                        height={64}
                        // DEMO NOTE: 'me-3' (Margin End) is the new version of 'mr-3' (Margin Right).
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
                
                {/* DEMO NOTE: 'ReactLoading' caused version conflicts in React 18+, 
                    so we switched to the official Bootstrap 'Spinner' component. */}
                {this.state.isLoading && (
                    <Spinner animation="border" variant="light" />
                )}
                {listUsers}
                {/* <div className='mt-4'>
                    {listUsers}
                </div> */}
            </div>
        );
    }
}

export default GitHub;