import React from "react";
import { Button, ButtonGroup, Col, Row } from "react-bootstrap";
import { MovieCard } from "./MovieCard";

export const MovieList = ({ movies }) => {
  return (
    <div className="bg-dark p-3 rounded">
      <Row className="mt-5">
        <Col>
          <ButtonGroup />
          <div className="py-2">{movies.length} Movies found!</div>
        </Col>
      </Row>
      <Row>
        <Col className="mt-3 d-flex justify-content-around flex-wrap ">
          {movies.map((item) => (
            <MovieCard key={item.imdbID} movie={item} />
          ))}
        </Col>
      </Row>
    </div>
  );
};
