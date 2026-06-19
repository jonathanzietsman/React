import React, { Component } from 'react';
// NOTE: 'Jumbotron' was completely removed in react-bootstrap v2.0. 
// We are importing 'Container' and 'Button' instead, using a custom CSS class 'jumbotron' as a workaround.
import { Container, Button } from 'react-bootstrap';

class JumboTronComponent extends Component {
    // CLASS NOTE: We removed the textbook's constructor. 
    // Writing: constructor(props) { super(props); } without initializing state or binding methods 
    // is called a "useless constructor" and triggers linting warnings. Modern React handles this automatically.

    render(){
        return (
            // Wrapping our content in a standard div with a class name so we can style it via CSS
            <div className='jumbotron'>
                <Container>
                    <h1>Welcome to React</h1>
                    
                    {/* this.props.children is a built-in React prop. 
                      It automatically renders whatever content/elements are nested *inside* our <JumboTronComponent> tags back in App.js.
                    */}
                    <p>{this.props.children}</p>
                    
                    <p>
                        <Button variant='primary'>Learn more.</Button>
                    </p>
                </Container>
            </div>
        );
    }
}

export default JumboTronComponent;