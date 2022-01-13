import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';

export default function People({ data }) {
    return (
        <Container>
            <Col>
            <Row xs={1} md={4} className="g-4">
                { data.map((people, i) => (
                    <Col key={i}>
                    <Card>
                        <Card.Body>
                        <Card.Title>{people.name}</Card.Title>

                            <Card.Subtitle>Height</Card.Subtitle>
                            <Card.Text>{people.height}</Card.Text>
                            <Card.Subtitle>Mass</Card.Subtitle>
                            <Card.Text>{people.mass}</Card.Text>
                            <Card.Subtitle>Hair Color</Card.Subtitle>
                            <Card.Text>{people.hair_color}</Card.Text>
                            <Card.Subtitle>Gender</Card.Subtitle>
                            <Card.Text>{people.gender}</Card.Text>
                    
                        </Card.Body>
                    </Card>
                    </Col>
                )) }
                </Row>
            </Col>
        </Container>
    )
}
