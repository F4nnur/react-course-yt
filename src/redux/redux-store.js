import {combineReducers, legacy_createStore as createStore} from "redux";
import addPostReducer from "../reducer/addPostReducer";
import sendMessageReducer from "../reducer/sendMessageReducer";
import usersReducer from "../reducer/usersReducer";

let reducers = combineReducers({
    mainPage: addPostReducer,
    dialogsPage: sendMessageReducer,
    usersPage: usersReducer
})

let store = createStore(reducers);

export default store;