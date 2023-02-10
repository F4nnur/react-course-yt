import {addPostAC} from "../../../../reducer/addPostReducer";
import {changeTextAC} from "../../../../reducer/changeTextReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
//
// const MyPostsContainer = (props) => {
//     let state = props.store.getState()
//     const addPost = (text) => {
//         props.store.dispatch(addPostAC(text));
//     }
//
//     let changeText = (text) => {
//         props.store.dispatch(changeTextAC(text));
//     };
//     return (
//         <MyPosts
//             addPost={addPost}
//             updateNewText={changeText}
//             post={state.mainPage.postData}
//             textForChange={state.mainPage.textForChange}
//         />
//     );
// }

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