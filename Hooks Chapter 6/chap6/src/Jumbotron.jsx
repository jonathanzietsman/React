import React from 'react';

// CHANGED:
// We REMOVED Jumbotron from the import because newer versions
// of react-bootstrap no longer include the Jumbotron component.
// The textbook is using an older version of react-bootstrap.
import { Button, Container } from 'react-bootstrap';

function JumbotronComponent(props){

    return (
        <div>

            {/* 
                CHANGED:
                We replaced <Jumbotron> with a normal div.

                WHY?
                Jumbotron was removed from react-bootstrap v2+.
                Modern Bootstrap uses utility classes instead.

                bg-light  = light grey background
                p-5       = padding
                rounded   = rounded corners
                mt-4      = margin top
            */}
            <div className="bg-light p-5 rounded mt-4">

                {/* 
                    CHANGED:
                    We wrapped the content inside a Container
                    to keep Bootstrap spacing/layout clean.
                */}
                <Container>

                    <h1>Hello, world!</h1>

                    {/* 
                        This displays whatever content is placed
                        between the opening and closing tags
                        of the component inside App.js
                    */}
                    <p>{props.children}</p>

                    {/* Bootstrap button still works normally */}
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