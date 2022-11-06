import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";

export const ButtonGroups = ({handleOnFilter}) => {
  return (
    <ButtonGroup aria-label="Basic example">
      <Button onClick={() => handleOnFilter("all")} variant="primary">
        All
      </Button>
      <Button onClick={() => handleOnFilter("happy")} variant="danger">
        Happy
      </Button>
      <Button onClick={() => handleOnFilter("lazy")} variant="warning">
        Lazy
      </Button>
    </ButtonGroup>
  );
};
