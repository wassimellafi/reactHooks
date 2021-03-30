import React, { useState } from "react";
import MovieCardComponent from "../movieCard/MovieCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Trailer from "../trailerdescription/Trailer";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const MovieListComponent = (props) => {
    // setting the state hooks
    const movie = props.movies.filter((movie) => movie.rate >= props.rate);
    const movies = props.movies.filter(
        (movie) =>
            movie.title
                .toLowerCase()
                .includes(props.searchTitle.toLowerCase()) &&
            movie.rate >= props.rate
    );

    console.log("movie", movie);
    return (
        <Container>
            <Row>
                {movies.map((movie, key) => {
                    return (
                        <Col key={movie.id}>
                            <MovieCardComponent movie={movie} />
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
};
export default MovieListComponent;
