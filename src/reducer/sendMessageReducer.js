const sendMessage = "sendMessage";

const  sendMessageReducer = (state, action) => {
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

export default sendMessageReducer;