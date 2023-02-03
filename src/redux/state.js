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
    addPost(text) {
        let newPost = {
            id: 5,
            data: text
        };
        this._state.mainPage.postData.push(newPost)
        this._renderEntireTree(this._state);
    },
    changeText(text) {
        this._state.mainPage.textForChange = text;
        this._renderEntireTree(this._state);
    },

}

export default store;