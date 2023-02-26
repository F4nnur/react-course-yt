import React, {Component} from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {setUserData} from "../../reducer/authorizationReducer";
import {authAPI} from "../../api/api";

class HeaderContainer extends Component {

    componentDidMount() {
        authAPI.authMe().then(data => {
            if (data.resultCode === 0) {
                let {email, id, login} = data.data;
                this.props.setUserData(id, email, login)
            }
        })
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


export default connect(mapSate, {setUserData})(HeaderContainer);