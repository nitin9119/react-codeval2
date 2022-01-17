import { reducer } from "./reducer";
import { createStore } from "react-redux";

export const store = createStore(reducer);
