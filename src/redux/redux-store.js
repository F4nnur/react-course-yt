import {combineReducers, legacy_createStore as createStore} from "redux";
import addPostReducer from "../reducer/addPostReducer";
import sendMessageReducer from "../reducer/sendMessageReducer";

let reducers = combineReducers({
    mainPage: addPostReducer,
    dialogsPage: sendMessageReducer
})

let store = createStore(reducers);

export default store;