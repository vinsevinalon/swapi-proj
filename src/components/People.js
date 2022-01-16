import React, { useState } from 'react'
import Pagination  from './Pagination';
import Filter from './Button';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Accordion, Nav } from 'react-bootstrap';


export default function People({ data }) {
    const allGender = ['All', ...new Set(data.map(data => data.gender))];
    const [ people, setPeople ] = useState([]);
    const [ currentPage, setCurrentPage ] = useState(1);
	const [ postsPerPage ] = useState(5);
    const [ buttons, setButtons ] = useState(allGender);

    //Get current posts.
	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);
  
	// Change page
	const paginate = pageNumber => setCurrentPage(pageNumber);

    const filter = (button) => {
        if(button === 'All') {
            setPeople(data);
            return;
        }

        const filteredData = data.filter(people => data.gender === button)
        setPeople(filteredData);
    }
    

    return (
        <Container>
            <h2>People</h2>
            <Col>
            <Filter button={buttons} filter={filter}/>
            <Row xs={1} md={4} className="g-4">
                { currentPosts.
                    filter(
                        (people) => 
                        people.gender)
                    .map((people, i) => (
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
                            <Card.Link as={Link} to={`/people/${people.name}`}>More Details</Card.Link>

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
