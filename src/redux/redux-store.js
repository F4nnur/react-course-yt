import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import addPostReducer from "../reducer/addPostReducer";
import sendMessageReducer from "../reducer/sendMessageReducer";
import usersReducer from "../reducer/usersReducer";
import authorizationReducer from "../reducer/authorizationReducer";
import thunk from "redux-thunk";

let reducers = combineReducers({
    mainPage: addPostReducer,
    dialogsPage: sendMessageReducer,
    usersPage: usersReducer,
    auth: authorizationReducer,
})

let store = createStore(reducers, applyMiddleware(thunk));
window.store = store

export default store;