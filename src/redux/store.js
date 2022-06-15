import { createLogger } from "redux-logger/src";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { episodesReducer } from "./features/episodes";

const logger = createLogger({
  collapsed: true,
});

export const store = createStore(
  episodesReducer,
  applyMiddleware(thunk, logger)
);
