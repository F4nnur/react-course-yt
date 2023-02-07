const sendMessage = "sendMessage";

let initialState = {
    dialogData: [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Olya'},
    ],
    messageData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'kek'},
        {id: 3, message: 'lol'},
    ]
};

const  sendMessageReducer = (state = initialState, action) => {
    switch (action.type) {
        case sendMessage:
            let newMessage = {
                id: 4,
                message: action.text
            };
            state.messageData.push(newMessage);
            return state;
        default:
            return state;
    }
}

export const sendMessageAC = (text) => ({type: sendMessage, text: text})

export default sendMessageReducer;