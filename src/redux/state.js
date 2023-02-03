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
        if (action.type === 'addPost') {
            let newPost = {
                id: 5,
                data: action.text
            };
            this._state.mainPage.postData.push(newPost)
            this._renderEntireTree(this._state);
        } else if (action.type === 'changeText') {
            this._state.mainPage.textForChange = action.text;
            this._renderEntireTree(this._state);
        }
    }

};

export default store;