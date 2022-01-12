import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';

export default function Planets({ data }) {
    return (
        <Container>
        <Row>
            <Col>
            <Row xs={1} md={4} className="g-4">
                { data.map((planets, i) => (
                    <Col key={i}>
                    <Card>
                        <Card.Body>
                        <Card.Title>{planets.name}</Card.Title>
                        <Card.Text>
                            <strong>Rotation Period</strong>
                            <p>{planets.rotation_period}</p>
                            <strong>Orbital Period</strong>
                            <p>{planets.orbital_period}</p>
                            <strong>Diameter</strong>
                            <p>{planets.diameter}</p>
                            <strong>Gravity</strong>
                            <p>{planets.gravity}</p>
                        </Card.Text>
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
