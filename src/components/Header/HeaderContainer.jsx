import React, {Component} from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {authMe, setUserData} from "../../reducer/authorizationReducer";

class HeaderContainer extends Component {

    componentDidMount() {
        this.props.authMe();
    }

    render() {
        return (
            <Header {...this.props}/>
        );
    }
}

let mapSate = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});


export default connect(mapSate, {setUserData, authMe})(HeaderContainer);