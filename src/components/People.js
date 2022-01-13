import React, { useState } from 'react'
import Pagination  from './Pagination';
import { Container, Row, Col, Card, Accordion } from 'react-bootstrap';


export default function People({ data }) {
    const [ currentPage, setCurrentPage ] = useState(1);
	const [ postsPerPage ] = useState(5);

    //Get current posts.
	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);
  
	// Change page
	const paginate = pageNumber => setCurrentPage(pageNumber);
    

    return (
        <Container>
            <Col>
            <Row xs={1} md={5} className="g-4">
                { currentPosts.map((people, i) => (
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
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                <Accordion.Header>More details</Accordion.Header>
                                <Accordion.Body>
                                    <Card.Subtitle>Hair Color</Card.Subtitle>
                                    <Card.Text>{people.hair_color}</Card.Text>
                                    <Card.Subtitle>Skin Color</Card.Subtitle>
                                    <Card.Text>{people.skin_color}</Card.Text>
                                    <Card.Subtitle>Eye Color</Card.Subtitle>
                                    <Card.Text>{people.eye_color}</Card.Text>
                                </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
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
        </Container>
    )
}
