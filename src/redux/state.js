import addPostReducer from "../reducer/addPostReducer";
import changeTextReducer from "../reducer/changeTextReducer";
import sendMessageReducer from "../reducer/sendMessageReducer";

const addPost = "addPost";
const changeText = "changeText";
const sendMessage = "sendMessage";

let store = {
    _state: {
        mainPage: {
            postData: [
                {id: 1, data: 'Hi'},
                {id: 2, data: 'Hello'},
                {id: 3, data: 'Cool'},
            ],
            textForChange: ''
        },
        dialogsPage: {
            dialogData: [
                {id: 1, name: 'Dima'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Olya'},
            ],
            messageData: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'kek'},
                {id: 3, message: 'lol'},
            ],
        }
    },

    getState() {
        return this._state;
    },

    _renderEntireTree() {
    },

    subscribe(observer) {
        this._renderEntireTree = observer;
    },

    dispatch(action) {
        this._state.mainPage = addPostReducer(this._state.mainPage, action);
        this._state.mainPage = changeTextReducer(this._state.mainPage, action);
        this._state.dialogsPage = sendMessageReducer(this._state.dialogsPage, action);
        this._renderEntireTree(this._state);
    }

};

export const addPostAC = (text) => {
    return{
        type: addPost,
        text: text}
};

export const changeTextAC = (text) => {
    return{
        type: changeText,
        text: text
    }
}

export const sendMessageAC = (text) => ({type: sendMessage, text: text})

export default store;