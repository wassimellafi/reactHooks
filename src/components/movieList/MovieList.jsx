import React, { useState } from "react";
import MovieCardComponent from "../movieCard/MovieCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const MovieListComponent = (props) => {
    // setting the state hooks

    return (
        <Container>
            <Row>
                {props.movies.map((movie, key) => {
                    return (
                        <Col key={key}>
                            <MovieCardComponent movie={movie} />
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
};
export default MovieListComponent;
