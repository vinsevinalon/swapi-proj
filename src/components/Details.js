import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
    Container,
    Row,
    Col,
    Card,
} from 'react-bootstrap';

export default function Details({ data }) {
    const { name } = useParams();
    const navigate = useNavigate();

    return (
        <Container>
            <Row className="g-4">
                {data
                    .filter((people) => people.name === name)
                    .map((people, i) => (
                        <Col key={i}>
                            <Card>
                                <Card.Header as="h5">About {people.name}</Card.Header>
                                <Card.Body>
                                    <Card.Title>
                                        {people.name}
                                    </Card.Title>
                                    <Card.Subtitle>Height</Card.Subtitle>
                                    <Card.Text>{people.height}</Card.Text>
                                    <Card.Subtitle>Gender</Card.Subtitle>
                                    <Card.Text>{people.gender}</Card.Text>
                                    <Card.Subtitle>Birth Year</Card.Subtitle>
                                    <Card.Text>{people.birth_year}</Card.Text>
                                    <Card.Subtitle>Eye Color</Card.Subtitle>
                                    <Card.Text>{people.eye_color}</Card.Text>
                                    <Card.Subtitle>Hair Color</Card.Subtitle>
                                    <Card.Text>{people.hair_color}</Card.Text>
                                    <Card.Subtitle>Skin</Card.Subtitle>
                                    <Card.Text>{people.skin_color}</Card.Text>
                                    <Card.Subtitle>Species</Card.Subtitle>
                                    <Card.Text>{people.species}</Card.Text>
                                    <Card.Subtitle>Mass</Card.Subtitle>
                                    <Card.Text>{people.mass}</Card.Text>
                                    <Card.Link onClick={() => navigate(-1)}>Back</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
            </Row>
        </Container>
    );
}
