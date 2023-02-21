import React, {Component} from 'react';
import ProfileInfo from "./ProfileInfo";
import axios from "axios";
import {connect} from "react-redux";
import {userProfile} from "../../reducer/addPostReducer";
import MyPostsContainer from "./Posts/Post/MyPostsContainer";


class ContentContainer extends Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.userProfile(response.data)
        })
    }


    render() {
        return (
            <div>
                <ProfileInfo {...this.props}/>
                <MyPostsContainer/>
            </div>
        );
    }
}

let mapState = (state) => ({
    profile: state.mainPage.profile
});
let mapDispatch = (dispatch) => ({
    userProfile: (profile) => {
        dispatch(userProfile(profile))
    }
})
export default connect(mapState, mapDispatch)(ContentContainer);