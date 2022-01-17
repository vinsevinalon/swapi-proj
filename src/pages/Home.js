import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

export default function Home() {
    return (
        <Container>
            <div class="home-cards-list">
                <div class="home-card 1">
                    <div class="home-card_image">
                        {' '}
                        <img src="https://media3.giphy.com/media/3o84sKpXBhJ0tRhqJa/giphy.gif?cid=ecf05e47cvs11v2yvqigwpdqndq878mq15mnisxuvmirafyk&rid=giphy.gif&ct=g" />{' '}
                    </div>
                    <div class="home-card_title title-white">
                        <Nav.Link as={Link} to="/people">
                            <p>People</p>
                        </Nav.Link>
                    </div>
                </div>

                <div class="home-card 2">
                    <div class="home-card_image">
                        <img src="https://i.pinimg.com/564x/f1/04/7a/f1047a83404ee17270ab87c46801fcc6.jpg" />
                    </div>
                    <div class="home-card_title title-white">
                        <Nav.Link as={Link} to="/planets">
                            <p>Planets</p>
                        </Nav.Link>
                    </div>
                </div>

                <div class="home-card 3">
                    <div class="home-card_image">
                        <img src="https://media2.giphy.com/media/3ohuABvqiwe8rIG17W/giphy.gif?cid=ecf05e47hzjvgo280rc1ekz55f40v9hkheoltsc6tb4n7v79&rid=giphy.gif&ct=g" />
                    </div>
                    <div class="home-card_title">
						<Nav.Link as={Link} to="/starships">
                            <p>Starships</p>
                        </Nav.Link>
                    </div>
                </div>
            </div>
        </Container>
    );
}
