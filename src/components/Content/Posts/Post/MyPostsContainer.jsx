import {addPostAC, changeTextAC} from "../../../../reducer/addPostReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let MapState = (state) => {
    return {
        post: state.mainPage.postData,
        textForChange: state.mainPage.textForChange
    }
};
let MapDispatch = (dispatch) => {
    return {
        addPost: (text) => {
            dispatch(addPostAC(text));
        },
        updateNewText: (text) => {
            dispatch(changeTextAC(text));
        }
    }
};

const MyPostsContainer = connect(MapState, MapDispatch)(MyPosts);
export default MyPostsContainer;