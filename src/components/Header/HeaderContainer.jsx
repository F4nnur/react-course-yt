import React, {Component} from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {setUserData} from "../../reducer/authorizationReducer";
import axios from "axios";

class HeaderContainer extends Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}).then(response => {
            if (response.data.resultCode === 0) {
                let {email, id, login} = response.data.data;
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