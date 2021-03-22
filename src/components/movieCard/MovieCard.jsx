import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import ReactStars from "react-rating-stars-component";

const MovieCardComponent = (props) => {
    const ratingChanged = (newRating) => {
        setNewRating(newRating);
    };
    const [newRating, setNewRating] = useState(0);
    return (
        <>
            <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={props.movie.posterUrl} />
                <Card.Body>
                    <Card.Title>{props.movie.title}</Card.Title>
                    <Card.Text>{newRating}</Card.Text>
                    <Card.Text>{props.movie.description}</Card.Text>
                    <ReactStars
                        onChange={ratingChanged}
                        count={5}
                        value={newRating}
                        size={24}
                        isHalf={true}
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="#ffd700"
                    />
                </Card.Body>
            </Card>
        </>
    );
};
export default MovieCardComponent;
