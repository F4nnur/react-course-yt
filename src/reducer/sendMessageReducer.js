const sendMessage = "sendMessage";
const changeMessage = "changeMessage";

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
    ],
    textForChangeMessage: ''
};

const  sendMessageReducer = (state = initialState, action) => {
    switch (action.type) {
        case sendMessage:
            let newMessage = {
                id: 4,
                message: action.text
            };
            let state2 = {...state}
            state2.messageData = [...state.messageData]
            state2.messageData.push(newMessage);
            return state2;
        case changeMessage:
            let state3 = {...state}
            state3.textForChangeMessage = action.text;
            return state3
        default:
            return state;
    }
}

export const sendMessageAC = (text) => ({type: sendMessage, text: text})
export const newMessageAC = (text) => ({type: changeMessage, text: text})

export default sendMessageReducer;