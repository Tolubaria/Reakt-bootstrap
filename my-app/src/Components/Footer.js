import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => (
    <Container fluid style={{backgroundColor: '#212529', color: '#fff'}}>
        <Container style={{justifyContent: 'center', padding: '10px'}}>
            
            <p>Robinhood means Robinhood Markets and 
                its in-application and web experiences 
                with its family of wholly owned subsidiaries 
                which includes Robinhood Financial, Robinhood 
                Securities, and Robinhood Crypto.
            </p>
            <p>All investments involve risks, including the possible loss of capital.</p>
            <div>
                <span style={{fontSize: '10px'}}>Securities trading is offered to self-directed customers by Robinhood Financial. Robinhood Financial is a member of the</span>
                <span style={{paddingLeft: '5px', fontSize: '10px', color: '#00C805'}}>Financial Industry Regulatory Authority (FINRA)</span>
            </div>
        </Container>
    </Container>
)

export default Footer;