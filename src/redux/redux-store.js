import {combineReducers, legacy_createStore as createStore} from "redux";
import addPostReducer from "../reducer/addPostReducer";
import changeTextReducer from "../reducer/changeTextReducer";
import sendMessageReducer from "../reducer/sendMessageReducer";

let reducers = combineReducers({
    mainPage: addPostReducer,
    mainPage2: changeTextReducer,
    dialogsPage: sendMessageReducer
})

let store = createStore(reducers);

export default store;