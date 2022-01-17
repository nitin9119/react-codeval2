import { ADD_JOBS } from "./actionTypes";

const init = { jobs: [] };

export const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case ADD_JOBS:
      return {
        ...state,
        jobs: [...state.jobs, payload],
      };
    default:
      return state;
  }
};
