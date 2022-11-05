import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const MovieCard = ({ movie = {}, func }) => {
  console.log(movie);
  const { Poster, Title, Year, imdbRating } = movie;
  return (
    <Card style={{ width: "18rem", marginTop: "10px" }}>
      <Card.Img variant="top" src={Poster} />
      <Card.Body>
        <Card.Title>{Title}</Card.Title>
        <Card.Text>
          <div>Released: {Year}</div>
          <div>Rating: {imdbRating}</div>
        </Card.Text>
        <div className=" d-flex justify-content-between">
          <Button onClick={() => func("happy")} variant="primary">
            Happy
          </Button>
          <Button onClick={() => func("lazy")} variant="warning">
            Lazy
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};
