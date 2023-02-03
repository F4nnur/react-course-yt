let renderEntireTree = () =>{

}
let state = {
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
}

export let addPost = (text) => {
    let newPost = {
        id: 5,
        data: text
    };
    state.mainPage.postData.push(newPost);
    renderEntireTree();
};

export let changeText = (text) => {
    state.mainPage.textForChange = text;
    renderEntireTree();
};

export const subscribe = (observer) => {
    renderEntireTree = observer;
}

export default state;