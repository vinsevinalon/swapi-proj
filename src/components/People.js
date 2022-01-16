import React, { useState } from 'react';
import Pagination from './Pagination';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';

export default function People({ data }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);

    //Get current posts.
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    return (
        <Container>
            <h2>People</h2>
            <Col>
                <Row xs={1} md={4} className="g-4">
                    {currentPosts.map((people, i) => (
                        <Col key={i}>
                            <Card>
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
            </Col>
            <Pagination
                className="pagination"
                postsPerPage={postsPerPage}
                totalPosts={data.length}
                paginate={paginate}
            />
        </Container>
    );
}
