import { IItem, IItemsState } from "./Items/types";

interface GlobalState {
    items: IItemsState
}

interface AppState {
}

interface AppAction {
  type: string;
  // items
  items?: IItem[];
}

export type { GlobalState, AppAction, AppState };