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
      case "SEARCH_LAB_TESTS":
        return { ...state, fetching: "I m fetching Now", fetched : true };
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
//build our Procedures List
const BuildTestsList = (state = {...state, checked: false, panel : []}, action) => {
  switch (action.type) {
    case "TEST_CHECKED" : 
      state.panel.push({testTitle : action.testTitle, testPrice : action.testPrice});
      return {...state, checked : true}
    case "TEST_UNCHECKED" : 

    for(let i=0; i<state.panel.length; i++){
      if(state.panel[i].testTitle === action.testTitle){
        state.panel.splice(i, 1);
      }
    }
        
      
      
      return {...state}
    default:
      return { ...state };
  }
};

///Export Reducers
export const middleware = applyMiddleware(thunk, logger);

export const rootReducer = combineReducers({
  getAllTests, BuildTestsList
});
