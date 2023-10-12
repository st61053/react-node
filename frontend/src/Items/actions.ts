import { INIT_ITEMS } from "./constants";
import { IItem } from "./types";

export const initItems = (items: IItem[]) => ({
    items,
    type: INIT_ITEMS,
  });