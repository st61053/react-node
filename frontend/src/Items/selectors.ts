import { createSelector } from "reselect";
import { GlobalState } from "../global";

export const getItems = () =>
  createSelector(
    (state: GlobalState) => state.items.items,
    (items) => items
  );