import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

export default function Filter() {
    return (
        <>
            <ButtonGroup aria-label="Basic example" style={{ margin: "5px"}}>
                <Button variant="secondary">Male</Button>
                <Button variant="secondary">Female</Button>
                <Button variant="secondary">N/A</Button>
            </ButtonGroup>
        </>
    );
}
