import React, { useState } from 'react';

import { Navbar, Nav, Button, Modal, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';



export default function NaviBar () {

    const [ show, setShow ] = useState (false);

    const handleClose = () => setShow (false);
    const handleShow = () => setShow (true);
    
    return (
      <>
        <Navbar CollapseOnSelect expand="lg" bg="#fff" variant='#fff' style={{ width: '100%', background: '#fff', paddingLeft: '30px'}}>
            <Navbar.Brand>
                <span>R</span>
                <span>o</span>
                <span>b</span>
                <span>i</span>
                <span>n</span>
                <span>h</span>
                <span>o</span>
                <span>o</span>
                <span>d</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"></Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav" style={{ width: '900px', justifyContent: 'space-between'}}>
                <Nav className="mr-auto" style={{ width: '500px', justifyContent: 'space-between'}}>
                    <Nav.Link > <Link to="/Home" style={{textDecoration: 'none'}}>Home</Link> </Nav.Link>
                    <Nav.Link> <Link to="/Products" style={{textDecoration: 'none'}}>Products</Link> </Nav.Link>
                    <Nav.Link> <Link to="/Learn" style={{textDecoration: 'none'}}>Learn</Link> </Nav.Link>
                    <Nav.Link> <Link to="/Support" style={{textDecoration: 'none'}}>Support</Link> </Nav.Link>
                    <Nav.Link> <Link to="/Who" style={{textDecoration: 'none'}}>Who we are</Link> </Nav.Link>
                </Nav>
                <Nav style={{ width: '250px', justifyContent: 'space-between'}}>
                    <Button variant="primary" className="mr-5" onClick={handleShow} style={{color: '#000000', background: '#fff', border: 'none'}}>Log In</Button>
                    <Button variant="primary" onClick={handleShow} style={{ width: "145px", background: '#00C805', color: '#000000', borderRadius: '24px', border: 'none'}}>Sign Up</Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Log In</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="fromBasicEmail">
                        <Form.Label>Email Adress</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"></Form.Control>
                        <Form.Text className="text-muted">We ll never share your email with anyone else</Form.Text>
                    </Form.Group>
                    <Form.Group controlId="fromBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter password"></Form.Control>
                        
                    </Form.Group>
                    <Form.Group controlId="fromBasicCheckbox">
                        <Form.Check type="checkbox" label="Remeber me"></Form.Check>
                        
                    </Form.Group>
                </Form>
            </Modal.Body>
        </Modal>
      </>
    )
  }