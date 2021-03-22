import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import ModalTitle from "react-bootstrap/ModalTitle";
import ModalBody from "react-bootstrap/ModalBody";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalHeader from "react-bootstrap/ModalHeader";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
const Modalcomponent = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => {
        props.addNewMovie({
            title,
            description,
            posterUrl,
            rate,
        });
        setShow(false);
    };
    const handleShow = () => setShow(true);
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [posterUrl, setPosterUrl] = useState();
    const [rate, setRate] = useState();

    return (
        <Container>
            <Button variant="primary" onClick={handleShow}>
                +
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="title"
                                placeholder="Enter title"
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            <Form.Text className="text-muted">
                                We'll never share your title with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicdescription">
                            <Form.Label>description</Form.Label>
                            <Form.Control
                                type="description"
                                placeholder="description"
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicPosterUrl">
                            <Form.Label>PosterUrl</Form.Label>
                            <Form.Control
                                type="PosterUrl"
                                placeholder="PosterUrl"
                                onChange={(e) => setPosterUrl(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicRate">
                            <Form.Label>Rate</Form.Label>
                            <Form.Control
                                type="Rate"
                                placeholder="Rate"
                                onChange={(e) => setRate(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default Modalcomponent;
