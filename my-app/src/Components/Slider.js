
import React from 'react';
import { Carousel, Button } from 'react-bootstrap';

import cat1 from '../img/cat1.jpg';
import cats from '../img/cats.jpg';
import max from '../img/max.jpg';


export default function Slider () {
    return (
      <Carousel>
        <Carousel.Item style={{'height': '700px'}}>
            <img
                className="d-block w-100"
                src={ cats }
                alt="Cats"
            />
            <Carousel.Caption>
                <h1 style={{color: '#000000'}}>Investing for Everyone</h1>
                <p style={{color: '#000000'}}>Commission-free investing, plus 
                    the tools you need to put your money in motion. 
                    Sign up and get your first stock for free. 
                    Certain limitations apply.
                </p>
                <Button style={{background: '#000000'}}>Sign Up</Button>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{'height': '600px'}}>
            <img
                className="d-block w-100"
                src={ cat1 }
                alt="Cats"
            />
            <Carousel.Caption>
                <h1>Investing for Everyone</h1>
                <p>Commission-free investing, plus 
                    the tools you need to put your money in motion. 
                    Sign up and get your first stock for free. 
                    Certain limitations apply.
                </p>
                <Button style={{background: '#000000'}}>Sign Up</Button>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{'height': '600px'}}>
            <img
                className="d-block w-100"
                src={ max }
                alt="Cats"
            />
            <Carousel.Caption>
                <h1 style={{color: '#000000'}}>Investing for Everyone</h1>
                <p style={{color: '#000000'}}>Commission-free investing, plus 
                    the tools you need to put your money in motion. 
                    Sign up and get your first stock for free. 
                    Certain limitations apply.
                </p>
                <Button style={{background: '#000000'}}>Sign Up</Button>
            </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
  }