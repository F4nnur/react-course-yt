const changeText = "changeText";

const changeTextReducer = (state, action) => {
    switch (action.type) {
        case changeText:
            state.textForChange = action.text;
            return state;
        default:
            return state;
    }

}

export default changeTextReducer;