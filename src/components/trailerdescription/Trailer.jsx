import React from "react";
import Container from "react-bootstrap/Container";
import { Player } from "video-react";

function trailer(props) {
    const movie = props.movies.find(
        (movie) => movie.id === Number(props.match.params.id)
    );

    return (
        <Container>
            <h1>{movie.title}</h1>
            <Player>
                <source src={movie.trailerfilm} />
            </Player>
            <h5>{movie.description}</h5>
        </Container>
    );
}

export default trailer;
