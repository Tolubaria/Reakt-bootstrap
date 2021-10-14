import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';

import cats from '../cats.jpg';
// import styled from 'styled-components';

// const Styles = styled.div`
//     .jumbo {
//         background: url(${cats}) no-repeat fixed bootom;
//         background-size: cover;
//         color: ;
//         height: 400px;
//         position: relative;
//         z-index: -2;
//     }
// `;

const Jumbotron = () => (
    // <Styles>
        <Jumbo fluid className="jumbo">
            <div className="overlay"></div>
            <Container style={{ padding: '20px', paddingBottom: '20px' }}>
                <h1>We are all investors.</h1>
                    <p>
                        Choose how much you want to invest, 
                        and we’ll convert from dollars to 
                        parts of a whole share.
                    </p>  
            </Container>
        </Jumbo>
    // </Styles>
  
)

export default Jumbotron;