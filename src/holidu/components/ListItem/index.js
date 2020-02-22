import React from "react";
import { connect } from "react-redux";
import { Carousel } from "react-responsive-carousel";

import { setSelectedApartmentAction } from "../../store/modules/apartments";
import { openPreviewAction } from "../../store/modules/session";

import {
  Wrapper,
  ImageWrapper,
  ImageItem,
  TitleText,
  DetailsWrapper,
  DetailText,
  ActionButton,
  PriceText,
  BottomRow,
  Badge
} from "./styles";

// TODO: implement fallbacks for missing data

const ListItem = ({
  id,
  isInstantBookable,
  price, // Assuming all prices are in EUR
  rating,
  details: { name, guestsCount, bedroomsCount, shortName },
  photos,
  setSelected,
  openPreview
}) => {
  const handleClick = () => {
    setSelected(id);
    openPreview();
  };

  return (
    <Wrapper onClick={handleClick}>
      <Carousel showThumbs={false} showStatus={false}>
        {photos.slice(0, 6).map(({ t: photo }) => {
          return (
            <ImageWrapper key={photo}>
              <ImageItem src={photo} alt="" />
            </ImageWrapper>
          );
        })}
      </Carousel>
      <DetailsWrapper>
        <TitleText>{name}</TitleText>
        <DetailText>{`${guestsCount} pers. | ${bedroomsCount} bedroom${
          +bedroomsCount > 1 ? "s" : ""
        } | ${shortName[0]} ${shortName[1]}`}</DetailText>
        <BottomRow>
          <PriceText>
            {`${price} €`} <small> / night</small>
          </PriceText>
          <ActionButton onClick={handleClick}>View Offer</ActionButton>
        </BottomRow>
      </DetailsWrapper>
      {isInstantBookable ? (
        <Badge>
          <span role="img" aria-label="emoji">
            ⚡
          </span>
          Instant Booking
        </Badge>
      ) : null}
    </Wrapper>
  );
};

const mapDispatchToProps = dispatch => ({
  setSelected: id => dispatch(setSelectedApartmentAction(id)),
  openPreview: () => dispatch(openPreviewAction())
});

export default connect(null, mapDispatchToProps)(ListItem);
