import React from "react";
import { connect } from "react-redux";
import get from "lodash/get";
import { Carousel } from "react-responsive-carousel";

import { apartmentDetailsSelector } from "../../store/selectors";
import { closePreviewAction } from "../../store/modules/session";
import {
  Modal,
  ModalContent,
  Title,
  DetailItem,
  CloseButton,
  ImageWrapper,
  ImageItem
} from "./styles";

// TODO: display more details about the offer

const PreviewModal = ({ apartment, closePreview }) => {
  const name = get(apartment, "details.name", "");
  const photos = get(apartment, "photos", []);
  return (
    <Modal>
      <ModalContent>
        <CloseButton onClick={closePreview}>&times;</CloseButton>
        <Title>{name}</Title>
        <Carousel showThumbs={false} showStatus={false}>
          {photos.map(({ m: photo }) => {
            return (
              <ImageWrapper key={photo}>
                <ImageItem src={photo} alt="" />
              </ImageWrapper>
            );
          })}
        </Carousel>
        <DetailItem>
          More detailed information about the offer goes here
        </DetailItem>
      </ModalContent>
    </Modal>
  );
};

const mapStateToProps = ({ apartments }) => ({
  apartment: apartmentDetailsSelector({ apartments })
});

const mapDispatchToProps = dispatch => ({
  closePreview: () => dispatch(closePreviewAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(PreviewModal);
