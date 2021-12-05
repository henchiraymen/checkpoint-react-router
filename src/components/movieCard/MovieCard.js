import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.css";
import { Card, Button } from "react-bootstrap";

import Rating from "../Rating/Rating";

const MovieCard = ({ movie }) => {
  return (
    <div>
      <Card className="card" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={movie.img}
          alt={movie.title}
          className="movieImg"
        />
        <Card.Body className="card-body">
          <Card.Title className="title-list">{movie.title}</Card.Title>
          <Card.Text className="desc">{movie.description}</Card.Text>
          <Rating rating={movie.rating} />
          <Link
            to={{
              pathname: `/movie/${movie.id}`,
              state: movie,
            }}
          >
            <Button variant="success">Watch the Movie</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
