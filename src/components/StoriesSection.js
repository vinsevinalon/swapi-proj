import React from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';

const CommentSection = (props) => {
    const { comments, removeComment } = props;

    return (
        <>
            <ToastContainer>
                {comments.map((comm) => {
                    return (
                        <Toast
                            key={comm.id}
                            className="commentsToast"
                            onClose={(ev) => removeComment(comm.id)}
                        >
                            <Toast.Header>
                                <img
                                    src="holder.js/20x20?text=%20"
                                    className="rounded me-2"
                                    alt=""
                                />
                                <strong className="me-auto">{comm.name}</strong>
                                <small className="text-muted">
                                    {comm.date}
                                </small>
                            </Toast.Header>
                            <Toast.Body className="commentSection">
                                {comm.comment}
                            </Toast.Body>
                        </Toast>
                    );
                })}
            </ToastContainer>
        </>
    );
};

export default CommentSection;
