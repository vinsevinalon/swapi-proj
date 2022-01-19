import React from 'react';
import { connect } from 'react-redux';

import CommentSection from '../components/StoriesSection';
import AddComment from '../components/StoriesForm';

import { addComment, removeComment } from '../redux/actions';

import { Container, Row, Col } from 'react-bootstrap';

let Stories = (props) => {
    const { addComment, comments, removeComment } = props;

    return (
        <Container>
            <Row>
                <Col>
                    <AddComment addComment={addComment} />
                </Col>
                <Col>
                    <CommentSection
                        comments={comments}
                        removeComment={removeComment}
                    />
                </Col>
            </Row>
        </Container>
    );
};

const mapStateToProps = (state) => {
    return {
        comments: state,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addComment: (name, date, comment) =>
            dispatch(addComment(name, date, comment)),
        removeComment: (id) => dispatch(removeComment(id)),
    };
};

Stories = connect(mapStateToProps, mapDispatchToProps)(Stories);

export default Stories;
