import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

export default function Home() {
    return (
        <Container>
            <div className="home-cards-list">
                <Nav.Link as={Link} to="/people" className="home-card 1">
                    <div className="home-card_image">
                        {' '}
                        <img
                            src="https://media3.giphy.com/media/3o84sKpXBhJ0tRhqJa/giphy.gif?cid=ecf05e47cvs11v2yvqigwpdqndq878mq15mnisxuvmirafyk&rid=giphy.gif&ct=g"
                            alt="people"
                        />{' '}
                    </div>
                    <div className="home-card_title title-white">
                        <p>People</p>
                    </div>
                </Nav.Link>

                <Nav.Link as={Link} to="/planets" className="home-card 2">
                    <div className="home-card_image">
                        <img
                            src="https://i.pinimg.com/564x/f1/04/7a/f1047a83404ee17270ab87c46801fcc6.jpg"
                            alt="planets"
                        />
                    </div>
                    <div className="home-card_title title-white">
                        <p>Planets</p>
                    </div>
                </Nav.Link>

                <Nav.Link as={Link} to="/starships" className="home-card 3">
                    <div className="home-card_image">
                        <img
                            src="https://media2.giphy.com/media/3ohuABvqiwe8rIG17W/giphy.gif?cid=ecf05e47hzjvgo280rc1ekz55f40v9hkheoltsc6tb4n7v79&rid=giphy.gif&ct=g"
                            alt="starships"
                        />
                    </div>
                    <div className="home-card_title title-white">
                        <p>Starships</p>
                    </div>
                </Nav.Link>
            </div>
        </Container>
    );
}
