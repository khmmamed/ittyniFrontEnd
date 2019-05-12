//Redux modules
import { createStore } from "redux";
import { rootReducer, middleware } from "./reducers";
//import thunk from "redux-thunk";
//---import End

const Store = createStore(rootReducer, middleware);

export default Store;
