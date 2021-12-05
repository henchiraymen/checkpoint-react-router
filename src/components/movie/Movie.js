import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

import "./Movie.css";
import { Data } from "../data/Data";

const Movie = ({ match, history }) => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    setMovie(Data.find((movie) => movie.id === +match.params.id));
  }, [match.params.id]);

  return (
    <div className="movieDetails">
      <h2 className="tit" textColor="white">{movie.title}</h2>
      <h6 className="des">{movie.description}</h6>
      <iframe
        width="560"
        height="315"
        src={movie.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <Button variant="success" className="go-back" onClick={() => history.goBack()}>Go Back</Button>
      {/* <button onClick={() => history.push("/about")}>Go Back</button> */}
    </div>
  );
};

export default Movie;
