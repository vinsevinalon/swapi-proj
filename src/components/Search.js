import React, { useState } from 'react';
import { Form, FloatingLabel } from 'react-bootstrap';

export default function Search(data) {
    return (
        <>
            <FloatingLabel
                controlId="floatingInput"
                label="Search"
                className="mb-3"
            >
                <Form.Control 
                    placeholder="Search"
                />
            </FloatingLabel>
        </>
    ); 
}
