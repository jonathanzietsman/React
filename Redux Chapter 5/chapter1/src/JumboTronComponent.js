import React, { Component } from 'react';
// NOTE: We import 'Container' instead of 'Jumbotron' because 'Jumbotron' was removed
// in react-bootstrap v2.0. The textbook likely used an older version (v1.x).
// This is a common issue when libraries update - components get removed or renamed.
import { Container, Button } from 'react-bootstrap';

class JumboTronComponent extends Component {
    // NOTE: We removed the constructor that was in the textbook.
    // When a constructor only calls super(props) with no additional logic,
    // it's unnecessary in modern React. This is called a "useless constructor"
    // and is considered bad practice. The linter (ESLint) warns us about this.

    render(){

        return (
            // NOTE: Instead of <Jumbotron> from the textbook, we use a <div> with 
            // className='jumbotron' and wrap content in <Container>. We added custom CSS
            // to style it. This is a common workaround when library components are removed.
            <div className='jumbotron'>
                <Container>
                    <h1>Welcome to React</h1>
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