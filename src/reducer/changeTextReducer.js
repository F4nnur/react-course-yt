const changeText = "changeText";

let initialState = {
    textForChange: ''
}

const changeTextReducer = (state = initialState, action) => {
    switch (action.type) {
        case changeText:
            state.textForChange = action.text;
            return state;
        default:
            return state;
    }

}

export const changeTextAC = (text) => {
    return{
        type: changeText,
        text: text
    }
}
export default changeTextReducer;