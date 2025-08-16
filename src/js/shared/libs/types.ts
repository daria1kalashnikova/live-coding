import { EVENTS } from "./constants";

export type Subscriber = (event: Event) => unknown;


export type Event = {
  name: EVENTS;
  payload: unknown;
};
