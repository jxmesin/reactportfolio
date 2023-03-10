import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CheatLeaf from '../assets/img/cheatleaf.jpg';
import Cinder from '../assets/img/cinder.jpg';
import Spoopy from '../assets/img/spoopy.jpg';


function Work() {
    return (
        <><div className="workCards">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={ CheatLeaf } />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div><div className="workCards">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={ Cinder } />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div><div className="workCards">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={ Spoopy } />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div></>
        

      

      
    );
}

export default Work;