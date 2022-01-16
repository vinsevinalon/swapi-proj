import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Search from './Search';


export default function Planets({ data }) {

    return (
        <Container>
        <Search />   
        <Row>
            <Col>
            <Row xs={1} md={4} className="g-4">
                { data.map((planets, i) => (
                    <Col key={i}>
                    <Card>
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
