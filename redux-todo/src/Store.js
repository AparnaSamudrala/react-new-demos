import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import Todoreducer from './reducers/TodoReducer';

const reducer = combineReducers({
    Todo: Todoreducer /*reducers go here*/
});
 const initialState = {};
//const middleware = [thunk]; //there can be multiple middlewares here
const store = createStore( reducer, initialState, applyMiddleware(thunk)  );
export default store;