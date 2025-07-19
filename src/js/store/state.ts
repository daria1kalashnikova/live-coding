import { Product } from "../api";

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
}

export const getProductLoadingState = (): boolean => {
    return _state.products.isLoading;
}

export const getProductsErrorState = (): boolean => {
    return _state.products.isError;
}

export const setProductItems = (newProducts: Product[]): void => {
    _state.products.items = newProducts;
    notifySubscribers("set/products", _state.products.items);
}

//Publisher subscriber 
let subscribers: unknown[] = [];

export const notifySubscribers = (eventName, payload = {}) => {
    const event = {
        name: eventName,
        payload,
    }

    subscribers.forEach(subscriber => {
        try {
            subscribe(event);
        } catch (err) {
            console.error(err)
        }
    })
}

export const subscribe = (subscriber: unknown): void => {
    subscribers.push(subscriber);
}

export const unsubscrinbe = (subscriber: unknown): void => {
    subscribers = subscribers.filter(el => el !== subscriber);
}


