import Container from "./Container";

import React from "react";

const ContainerRow = ({ children }) => {
  return (
    <Container>
      <div className="row">{children}</div>
    </Container>
  );
};

export default ContainerRow;
