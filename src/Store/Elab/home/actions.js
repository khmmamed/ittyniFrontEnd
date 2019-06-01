import axios from "axios";

//List of Action in home page

const FETCH_TESTS_START  = "FETCH_TESTS_START"
const RECIEVE_TESTS 	    = "RECIEVE_TESTS"
const FETCH_TESTS_ERROR  = "FETCH_TESTS_ERROR"

//user select a test
const TEST_CHECKED = "TEST_CHECKED";
const TEST_UNCHECKED = "TEST_UNCHECKED";

/**
 * Actions Dispatcher finctions 
 */

//actions Dispatcher
export const dispatchFetchingTests = () => dispatch => {
    dispatch({ type: "FETCH_TESTS_START" });
    axios
      .get("http://207.246.80.123:8000/tests/fr")
      .then(respond => {
        dispatch({ type: "RECIEVE_TESTS", payload: respond.data });
      })
      .catch(err => dispatch({ type: "FETCH_TESTS_ERROR", payload: err }));
};
  
//Search a Lab Tests
export const dispatchSearchLabTestS = (query) => dispatch => {
    dispatch ({type: "SEARCH_LAB_TESTS"});
    axios
      .get("http://localhost:8000/eLab/search/tests/fr?q="+query)
      .then(respond => {
        dispatch({ type: "RECIEVE_TESTS", payload: respond.data });
      })
      .catch(err => dispatch({ type: "FETCH_TESTS_ERROR", payload: err }));
}

//building list of wanted tests and calculate total price
export const testchecked = (title, price) => dispatch => 
    dispatch({
        type : TEST_CHECKED, 
        checked : true, 
        testTitle : title,
        testPrice : price
});

export const uncheckedTest = (title)=> dispatch => dispatch({
  type : TEST_UNCHECKED,
  testTitle : title
})