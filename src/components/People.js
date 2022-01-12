import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';

export default function People({ data }) {
    return (
    <Container fluid>
        <Row>
            <Col>
            <Row xs={1} md={4} className="g-4">
                { data.map((people, i) => (
                    <Col key={i}>
                    <Card>
                        <Card.Body>
                        <Card.Title>{people.name}</Card.Title>
                        <Card.Text>
                            
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
