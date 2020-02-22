import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  background: #ffffff;
  color: #414141;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.13);
  -webkit-transition: box-shadow 0.2s;
  transition: box-shadow 0.2s;
  &:hover {
    box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.15);
  }
  cursor: pointer;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

export const ImageWrapper = styled.div`
  height: 219px;
  overflow: hidden;
`;

export const ImageItem = styled.img`
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

export const DetailsWrapper = styled.div`
  height: 135px;
  padding: 10px;
`;

export const TitleText = styled.h3`
  font-weight: 600;
  font-size: 1.125rem;
  margin-top: 0;
  margin-bottom: 5px;
  max-height: 45px;
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
`;

export const PriceText = styled.h3`
  font-weight: 900;
  font-size: 23px;
  margin-top: 0;
  margin-bottom: 5px;
  & > small {
    font-weight: 400;
  }
`;

export const BottomRow = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const DetailText = styled.p`
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 15px;
`;

export const ActionButton = styled.button`
  padding: 15px;
  align-items: center;
  text-align: center;
  box-shadow: none;
  border: none;
  border-radius: 5px;
  font-weight: 600;
  margin-top: 5px;
  background: #ff6064;
  color: #ffffff;
  cursor: pointer;
`;

export const Badge = styled.div`
  position: absolute;
  top: 10px;
  left: 0;
  padding: 5px;
  background: #ffffff;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
  font-size: 15px;
`;
