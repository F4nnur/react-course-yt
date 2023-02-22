import React, {Component} from 'react';
import ProfileInfo from "./ProfileInfo";
import axios from "axios";
import {connect} from "react-redux";
import {userProfile} from "../../reducer/addPostReducer";
import MyPostsContainer from "./Posts/Post/MyPostsContainer";
import {useLocation, useParams, useNavigate} from "react-router-dom";

class ContentContainer extends Component {

    componentDidMount() {
        let userID = this.props.router.params.userid
        if (!userID) {
            userID =2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`).then(response => {
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

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}
let mapState = (state) => ({
    profile: state.mainPage.profile
});
let mapDispatch = (dispatch) => ({
    userProfile: (profile) => {
        dispatch(userProfile(profile))
    }
})

export default connect(mapState, mapDispatch)(withRouter(ContentContainer));