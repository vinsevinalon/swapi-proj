import React from 'react';
import { Form, Button, Container, Card } from 'react-bootstrap';

class AddComment extends React.Component {
    constructor(props) {
        super(props);

        this.initialState = {
            name: '',
            comment: '',
        };

        this.state = this.initialState;
    }

    handleChange = (event) => {
        const { name, value } = event.target;

        const getData = () => {
            const data = new Date().toLocaleString();
            return data;
        };

        this.setState({
            [name]: value,
            date: [getData()],
        });
    };

    handleComment = () => {
        if (!this.state.name.length || !this.state.comment.length) {
            return;
        } else {
            this.props.addComment(
                this.state.name,
                this.state.date,
                this.state.comment
            );
            this.setState(this.initialState);
        }
    };

    render() {
        return (
            <>
                <h2>What is your favourite Star Wars moment?</h2>
                <Container>
                    <Card style={{ width: '25rem', padding: '10px' }}>
                        <Form>
                            <Form.Group
                                className="mb-3"
                            >
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Name"
                                    name="name"
                                    onChange={this.handleChange}
                                    value={this.state.name}
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlTextarea1"
                            >
                                <Form.Label>You favorite story</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    name="comment"
                                    onChange={this.handleChange}
                                    value={this.state.comment}
                                    placeholder='eg. “The Republic will be reorganized into the First Galactic Empire!!”'
                                />
                            </Form.Group>
                            <Button
                                variant="primary"
                                type="button"
                                onClick={this.handleComment}
                            >
                                Submit
                            </Button>
                        </Form>
                    </Card>
                </Container>
            </>
        );
    }
}

export default AddComment;
