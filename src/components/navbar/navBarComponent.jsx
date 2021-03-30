import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import ReactStars from "react-rating-stars-component";
import Modal from "react-bootstrap/Modal";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const NavBarComponent = (props) => {
    const handleShow = () => setShow(true);
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [posterUrl, setPosterUrl] = useState();
    const [rate, setRate] = useState();
    const ratingChanged = (newRating) => {
        props.setRate(newRating);
    };
    const titleChanged = (e) => {
        props.setSearchTitle(e.target.value);
    };
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

    return (
        <Container>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                <Button variant="primary" onClick={handleShow}>
                    Add movie
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
                                    We'll never share your title with anyone
                                    else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicdescription">
                                <Form.Label>description</Form.Label>
                                <Form.Control
                                    type="description"
                                    placeholder="description"
                                    onChange={(e) =>
                                        setDescription(e.target.value)
                                    }
                                />
                            </Form.Group>

                            <Form.Group controlId="formBasicPosterUrl">
                                <Form.Label>PosterUrl</Form.Label>
                                <Form.Control
                                    type="PosterUrl"
                                    placeholder="PosterUrl"
                                    onChange={(e) =>
                                        setPosterUrl(e.target.value)
                                    }
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
                <Form inline>
                    <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={24}
                        activeColor="#ffd700"
                    />
                    <FormControl
                        type="text"
                        placeholder="Search"
                        className="mr-sm-2"
                        onChange={titleChanged}
                    />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
        </Container>
    );
};
export default NavBarComponent;
