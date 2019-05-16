import axios from "axios";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { applyMiddleware, combineReducers } from "redux";

//Get all Tests Sorted by Alphabet

const getAllTests = (
  state = {
    fetching: "",
    fetched: false,
    tests: []
  },
  action
) => {
  switch (action.type) {
    case "FETCH_TESTS_START":
      return { ...state, fetching: "fa fa-spinner fa-spin", fetched : true };
    case "RECIEVE_TESTS":
      return {
        ...state,
        fetching: "receiving data ...",
        fetched: true,
        tests: action.payload
      };
    case "FETCH_TESTS_ERROR":
      return { ...state, fetching: "", error: action.payload.message, fetched : true };
    default:
      return { ...state };
  }
};

//dispatching function
export const dispatchFetchingTests = () => dispatch => {
  dispatch({ type: "FETCH_TESTS_START" });
  axios
    .get("http://localhost:8000/tests/fr")
    .then(respond => {
      dispatch({ type: "RECIEVE_TESTS", payload: respond.data });
    })
    .catch(err => dispatch({ type: "FETCH_TESTS_ERROR", payload: err }));
};

///Export Reducers
export const middleware = applyMiddleware(thunk, logger);

export const rootReducer = combineReducers({
  getAllTests
});
