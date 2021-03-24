import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import ReactStars from "react-rating-stars-component";
const NavBarComponent = (props) => {
    const ratingChanged = (newRating) => {
        props.setRate(newRating);
    };
    const titleChanged = (e) => {
        props.setSearchTitle(e.target.value);
    };
    return (
        <Container>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
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
