import React from "react";
import { Carousel } from "react-responsive-carousel";

import { Wrapper, ImageWrapper, ImageItem, TitleText } from "./styles";

// TODO: implement fallbacks for missing data

const ListItem = ({
  id,
  isAvailable,
  isExpressBookable,
  isInstantBookable,
  price,
  rating,
  details,
  photos
}) => {
  return (
    <Wrapper>
      <Carousel showThumbs={false} showStatus={false}>
        {photos.slice(0, 6).map(({ t: photo }) => {
          return (
            <ImageWrapper key={photo}>
              <ImageItem src={photo} alt="" />
            </ImageWrapper>
          );
        })}
      </Carousel>
      <TitleText>{details.name}</TitleText>
    </Wrapper>
  );
};

export default ListItem;
