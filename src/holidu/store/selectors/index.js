import { createSelector } from "reselect";
import get from "lodash/get";
import find from "lodash/find";

export const selectedApartmentSelector = ({ apartments }) =>
  get(apartments, "selected");
export const apartmentsSelector = ({ apartments }) =>
  get(apartments, "offers", []);

export const apartmentDetailsSelector = createSelector(
  apartmentsSelector,
  selectedApartmentSelector,
  (apartments, selected) => {
    return find(apartments, ["id", selected]);
  }
);
