import React from 'react';
import { Container, Row, Col, Button, ButtonGroup } from 'react-bootstrap';

export default function Filter({ button, filter }) {
    return (
        <Container>
            <Col>
                <ButtonGroup>
                    {button.map((gender, i) => {
                        return (
                            <Button key={i} type="button">
                                {gender}
                            </Button>
                        );
                    })}
                </ButtonGroup>
                <br />
            </Col>
        </Container>
    );
}
