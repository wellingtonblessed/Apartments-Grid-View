import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component"; // Implementing my own solution would take more time than I have
import get from "lodash/get";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { getApartmentsAction } from "../../store/modules/apartments";
import ListItem from "../../components/ListItem";
import PreviewModal from "../../components/PreviewModal";
import Loader from "../../components/Loader";
import { ListContainer, ListItemWrapper } from "./styles";

const ApartmentList = ({
  getApartments,
  apartments,
  loading,
  error,
  preview,
  nextPage,
  totalCount
}) => {
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    getApartments();
  }, [getApartments]);

  useEffect(() => {
    setHasMore(totalCount > apartments.length);
  }, [apartments, totalCount]);

  const pageIndex = () => {
    if (nextPage) {
      const urlParams = new URLSearchParams(nextPage);
      return urlParams.getAll("pageIndex")[0];
    }
    return 0;
  };

  const handleLoadMore = () => getApartments(pageIndex());

  if ((loading || error) && pageIndex() === 0) return <Loader error={error} />;

  return (
    <>
      <ListContainer>
        <InfiniteScroll
          dataLength={apartments.length}
          next={handleLoadMore}
          hasMore={hasMore}
          loader={<Loader error={error} />}
        >
          {apartments
            ? apartments.map(
                ({
                  id,
                  isInstantBookable,
                  price: { daily: price },
                  rating,
                  details,
                  photos
                }) => {
                  const props = {
                    id,
                    isInstantBookable,
                    price,
                    rating,
                    details,
                    photos
                  };
                  return (
                    <ListItemWrapper key={id}>
                      <ListItem {...props} />
                    </ListItemWrapper>
                  );
                }
              )
            : null}
        </InfiniteScroll>
      </ListContainer>
      {preview ? <PreviewModal /> : null}
    </>
  );
};

const mapStateToProps = ({ apartments: apartmentItems, session }) => ({
  apartments: get(apartmentItems, "offers", []),
  loading: get(session, "loading", false),
  error: get(session, "error", false),
  preview: get(session, "preview", false),
  nextPage: get(apartmentItems, "metaData.cursor.nextPage"),
  totalCount: get(apartmentItems, "metaData.cursor.totalCount")
});

const mapDispatchToProps = dispatch => ({
  getApartments: pageIndex => dispatch(getApartmentsAction(pageIndex))
});

export default connect(mapStateToProps, mapDispatchToProps)(ApartmentList);
