import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';



export default function Planets({ data }) {
    return (
        <Container>
            <h2>Planets</h2>
        <Row>
            <Col>
            <Row xs={1} md={5} className="g-4">
                { data.map((planets, i) => (
                    <Col key={i}>
                    <Card style={{ width: '16rem', height: '20rem' }} bg='dark' text='light' border='dark'>
                        <Card.Body>
                        <Card.Title>{planets.name}</Card.Title>
                            <Card.Subtitle>Rotation Period</Card.Subtitle>
                            <Card.Text>{planets.rotation_period}</Card.Text>
                            <Card.Subtitle>Orbital Period</Card.Subtitle>
                            <Card.Text>{planets.orbital_period}</Card.Text>
                            <Card.Subtitle>Diameter</Card.Subtitle>
                            <Card.Text>{planets.diameter}</Card.Text>
                            <Card.Subtitle>Gravity</Card.Subtitle>
                            <Card.Text>{planets.gravity}</Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                )) }
                </Row>
            </Col>
        </Row>
    </Container>
    )
}
