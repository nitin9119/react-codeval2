import { ADD_JOBS } from "./actionTypes";

export const addJobs = (data) => {
  return {
    type: ADD_JOBS,
    payload: data,
  };
};
