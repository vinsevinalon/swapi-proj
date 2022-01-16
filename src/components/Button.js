import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

export default function Filter({button, filter}) {
    return (
        <>
            {
                button.map((gender, i) => {
                    return <button 
                        key={i}
                        type="button" 
                        onClick={() => filter(gender)}>
                        {gender}
                    </button>
                })
            }
        </>
    );
}
