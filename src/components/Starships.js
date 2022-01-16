import React, { useState } from 'react';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';


export default function Starships({ data }) {
    const [searchTerm, setSearchTerm] = useState('');
  
    return (
        <Container>
            <h2>Starships</h2>
            <Form.Control 
                type="text" 
                placeholder="Search"
                onChange={(e) => setSearchTerm(e.target.value)} />
                <br />
            <Col>
                <Row xs={1} md={4} className="g-4">
                    {data.filter(
                        (data) => 
                        data.name
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase()))
                        .map((starships, i) => (
                        <Col key={i}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>{starships.name}</Card.Title>
                                    <Card.Subtitle>Model</Card.Subtitle>
                                    <Card.Text>
                                        {starships.model}
                                    </Card.Text>
                                    <Card.Subtitle>Starship Class</Card.Subtitle>
                                    <Card.Text>{starships.starship_class}</Card.Text>
                                    <Card.Subtitle>Manufacturer</Card.Subtitle>
                                    <Card.Text>
                                        {starships.manufacturer }
                                    </Card.Text>
                                    <Card.Subtitle>Passengers</Card.Subtitle>
                                    <Card.Text>{starships.passengers }</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Col>
        </Container>
    );
}
