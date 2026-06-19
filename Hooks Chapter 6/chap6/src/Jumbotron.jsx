import React from 'react';

// Importing essential layout and design primitives from React-Bootstrap
import { Button, Container } from 'react-bootstrap';

function JumbotronComponent(props) {
    return (
        <div>
            {/* Custom structural replacement for the deprecated Bootstrap Jumbotron.
                bg-light  = Gives a soft light grey background
                p-5       = Large padding on all sides for spacing
                rounded   = Adds border-radius corners
                mt-4      = Margins top to push elements downward
            */}
            <div className="bg-light p-5 rounded mt-4">

                {/* Container holds content centered and aligned to the grid responsive breakpoints */}
                <Container>

                    <h1>Hello, world!</h1>

                    {/* Dynamically injects content passed down from the parent (App.js) 
                        via standard React layout nesting (props.children).
                    */}
                    <p>{props.children}</p>

                    {/* The primary functional action button */}
                    <p>
                        <Button variant="primary">
                            Learn More
                        </Button>
                    </p>

                </Container>

            </div>

        </div>
    );
}

export default JumbotronComponent;