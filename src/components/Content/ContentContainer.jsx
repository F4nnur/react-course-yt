import React, {Component} from 'react';
import ProfileInfo from "./ProfileInfo";
import MyPostsContainer from "./Posts/Post/MyPostsContainer";
import {connect} from "react-redux";
import {userProfile} from "../../reducer/addPostReducer";
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import {usersAPI} from "../../api/api";

class ContentContainer extends Component {
    componentDidMount() {
        let userid = this.props.router.params.userId
        if (!userid) {
            userid = 2;
        }
        usersAPI.getProfile(userid).then(data => {
            this.props.setUserProfile(data)
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
    profile: state.mainPage.profile,
    isAuth: state.auth.isAuth,
})

let mapDispatch = (dispatch) => ({
    setUserProfile: (profile) => {
        dispatch(userProfile(profile))
    }
})

export default connect(mapState, mapDispatch)(withRouter(ContentContainer));