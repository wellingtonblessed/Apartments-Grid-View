import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.13);
  -webkit-transition: box-shadow 0.2s;
  transition: box-shadow 0.2s;
  &:hover {
    box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.15);
  }
  cursor: pointer;
`;

export const ImageWrapper = styled.div`
  height: 219px;
  overflow: hidden;
`;

export const ImageItem = styled.img`
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

export const TitleText = styled.p`
  font-weight: 600;
`;

export const DetailText = styled.p`
  font-family: monospace;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const ActionButton = styled.button`
  width: 50px;
  height: 20px;
  align-items: center;
  text-align: center;
  box-shadow: none;
  border: none;
  border-radius: 5px;
  margin-top: 5px;
  background: #dddddd;
  color: #000000;
`;
