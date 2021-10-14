import React from 'react';
import Slider from '../Components/Slider'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import cat1 from '../img/cat1.jpg';
import cats from '../img/cats.jpg';
import max from '../img/max.jpg';
import superbowl from '../img/backgraund/superbowl.jpg';
import Jumbotron from '../Components/Jumbotron'


export const Home = () => (
    <>
        
        <Slider />
            <Container style={{paddingTop: '20px', paddingBottom: '20px' }}>
                <Row>
                    <Col>
                        <Card style={{width: '18rem'}}>
                            <Card.Img variant="top" src={ cats }></Card.Img>
                            <Card.Body>
                                <Card.Title>ffcn</Card.Title>
                                    <Card.Text>fdhfdxgnxmghxky
                                        yukliol
                                    </Card.Text>
                                    <Button variant="primary" >lorem</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{width: '18rem'}}>
                            <Card.Img variant="top" src={ cat1 }></Card.Img>
                            <Card.Body>
                                <Card.Title>Oran</Card.Title>
                                    <Card.Text>fdhfdxgnxmghxky
                                        yukliol
                                    </Card.Text>
                                    <Button variant="primary">lorem</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{width: '18rem'}}>
                            <Card.Img variant="top" src={ max }></Card.Img>
                            <Card.Body>
                                <Card.Title>max</Card.Title>
                                    <Card.Text>fdhfdxgnxmghxky
                                        yukliol
                                    </Card.Text>
                                    <Button variant="primary">lorem</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Jumbotron></Jumbotron>
            <Container style={{margin: '30px' }}>
                <Row>
                    <Col md={7}>
                        <img
                            src={ superbowl }
                            height={400}
                            alt="Cats"
                        />
                    </Col>
                    <Col md={5}>
                        <h2>Web dev</h2>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur 
                            adipisicing elit. Minima sequi inventore 
                            eum est beatae temporibus aliquam provident 
                            unde harum odio. Voluptatum sequi nemo fugiat 
                            dolorem, possimus dolorum explicabo placeat 
                            delectus?
                        </p>
                    </Col>
                </Row>
            </Container>
            
    </>
)