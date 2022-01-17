import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Pagination from '../components/Pagination';



export default function Planets({ data }) {
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
            <h2>Planets</h2>
        <Row>
            <Col>
            <Row xs={1} md={5} className="g-4">
                { currentPosts.map((planets, i) => (
                    <Col key={i}>
                    <Card style={{ width: '16rem', height: '20rem' }}>
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
            <Pagination
                className="pagination"
                postsPerPage={postsPerPage}
                totalPosts={data.length}
                paginate={paginate}
            />
        </Row>
    </Container>
    )
}
