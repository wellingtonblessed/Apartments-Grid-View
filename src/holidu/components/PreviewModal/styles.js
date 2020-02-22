import styled from "styled-components";

export const Modal = styled.div`
  display: block;
  position: fixed;
  z-index: 2;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalContent = styled.div`
  background-color: #fefefe;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #888888;
  width: 80%;
  max-width: 600px;
`;

export const CloseButton = styled.span`
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  &:hover {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 1.125rem;
  margin-bottom: 15px;
`;

export const ImageWrapper = styled.div`
  max-height: 400px;
`;

export const ImageItem = styled.img`
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

export const DetailItem = styled.div`
  margin: 5px;
  font-family: Monospace;
`;
