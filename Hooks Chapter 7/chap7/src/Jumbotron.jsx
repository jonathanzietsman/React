import React from 'react';

// CHANGED NOTE:
// We REMOVED Jumbotron from the import because newer versions
// of react-bootstrap no longer include the Jumbotron component.
// Modern Bootstrap uses utility utility classes on structural divs instead.
import { Button, Container } from 'react-bootstrap';

/**
 * JumbotronComponent: A custom component used to feature prominent marketing content.
 * Utilizes `props.children` to dynamically nest content sent from parent layouts.
 */
function JumbotronComponent(props){

    return (
        <div>
            {/* Replaced older structural <Jumbotron> with a standard div.
                Utility configuration breakdown:
                bg-light  = light grey background color
                p-5       = heavy padding around content
                rounded   = border-radius active for soft edges
                mt-4      = spacing margin at the top
            */}
            <div className="bg-light p-5 rounded mt-4">

                {/* Container wraps inner grids to maintain layout symmetry across viewports */}
                <Container>

                    <h1>Hello, world!</h1>

                    {/* Dynamically outputs text, html, or components declared between 
                        the tags where <JumbotronComponent> is used.
                    */}
                    <p>{props.children}</p>

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