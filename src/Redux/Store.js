import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import { reducer as userReducer } from "./UserReducer/reducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  userReducer,
});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;
