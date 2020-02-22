import React from "react";
import styled from "styled-components";

// TODO: implement a proper loading animation and error display

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  justify-content: center;
  align-items: center;
`;

const Text = styled.span`
  font-size: 18px;
  font-family: monospace;
  color: #000000;
`;

const Loader = ({ error }) => {
  const message = error ? "Oops something wen't wrong" : "Loading...";
  return (
    <Wrapper>
      <Text>{message}</Text>
    </Wrapper>
  );
};

export default Loader;
