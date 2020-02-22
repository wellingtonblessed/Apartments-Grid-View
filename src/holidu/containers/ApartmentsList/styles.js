import styled from "styled-components";

export const ListContainer = styled.div`
  width: 100%;
  & > div {
    & > div {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      width: 100%;
    }
  }
`;

export const ListItemWrapper = styled.div`
  max-width: 390px;
  position: relative;
`;
