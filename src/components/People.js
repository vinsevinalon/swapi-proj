import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button, ButtonGroup } from 'react-bootstrap';

export default function People({ data }) {
    const [people, setPeople] = useState(data);
    const filterItem = (genderItem) => {
        const updatedGender = data.filter((data) => {
            return data.gender === genderItem;
        });
        setPeople(updatedGender);
    };
    return (
        <Container>
            <h2>People</h2>
            <ButtonGroup aria-label="Basic example" style={{ margin: '10px'}}>
                <Button
                    className="btn btn-warning"
                    onClick={() => filterItem('male')}
                >
                    Male
                </Button>
                <Button
                    className="btn btn-warning"
                    onClick={() => filterItem('n/a')}
                >
                    N/A
                </Button>
                <Button
                    className="btn btn-warning"
                    onClick={() => filterItem('female')}
                >
                    Female
                </Button>
            </ButtonGroup>
                <Row xs={1} md={4} className="g-4">
                    { people.map((people, i) => (
                        <Col key={i}>
                            <Card style={{ width: '16rem', height: '20rem' }}>
                                <Card.Body>
                                    <Card.Title>{people.name}</Card.Title>
                                    <Card.Subtitle>Height</Card.Subtitle>
                                    <Card.Text>{people.height}</Card.Text>
                                    <Card.Subtitle>Gender</Card.Subtitle>
                                    <Card.Text>{people.gender}</Card.Text>
                                    <Card.Subtitle>Birth Year</Card.Subtitle>
                                    <Card.Text>{people.birth_year}</Card.Text>
                                    <Card.Subtitle>Mass</Card.Subtitle>
                                    <Card.Text>{people.mass}</Card.Text>
                                    <Card.Link
                                        as={Link}
                                        to={`/people/${people.name}`}
                                    >
                                        More Details
                                    </Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
        </Container>
    );
}
