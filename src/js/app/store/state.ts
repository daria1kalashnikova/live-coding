import { EVENTS } from "../../shared/libs/constants";

import { Product } from "../../entities/product/model/types";
import { Event, Subscriber } from "../../shared/libs/types";

type State = {
  products: {
    items: Product[];
    isLoading: boolean;
    isError: boolean;
  };
};

const _state: State = {
  products: {
    items: [],
    isLoading: false,
    isError: false,
  },
};

export const getProductItems = (): Product[] => {
  const itemsCopy = [..._state.products.items];
  return itemsCopy;
};

export const getProductLoadingState = (): boolean => {
  return _state.products.isLoading;
};

export const getProductsErrorState = (): boolean => {
  return _state.products.isError;
};

export const setProductItems = (newProducts: Product[]): void => {
  _state.products.items = newProducts;
  console.log(newProducts);
  notifySubscribers(EVENTS.SET_PRODUCTS, _state.products.items);
};

//Publisher subscriber

let subscribers: Subscriber[] = [];

export const notifySubscribers = (eventName: EVENTS, payload: unknown = {}) => {
  const event: Event = {
    name: eventName,
    payload,
  };

  subscribers.forEach((subscriber) => {
    try {
      if (typeof subscriber === "function") subscriber(event);
    } catch (err) {
      console.error(err);
    }
  });
};

export const subscribe = (subscriber: Subscriber): void => {
  subscribers.push(subscriber);
};

export const unsubscribe = (subscriber: Subscriber): void => {
  subscribers = subscribers.filter((el) => el !== subscriber);
};
