import { combineReducers } from 'redux';
import { itemsReducer } from './Items/reducer';

export declare type partialReducer = (partialStore: object) => object;

export const createAppReducer = () => {
  return combineReducers({
    items: itemsReducer,
  });
};