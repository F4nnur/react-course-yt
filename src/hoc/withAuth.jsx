import {Navigate} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";

let mapStateToPropsRedirect = (state) => ({
    isAuth: state.auth.isAuth
})
export const withAuth = (Component) => {
    let RedirectComponent = (props) => {
        if (!props.isAuth) return <Navigate to={'/login'}/>
        return <Component {...props}/>
    }
    let ConnectedRedirectComponent = connect(mapStateToPropsRedirect)(RedirectComponent)

    return ConnectedRedirectComponent;
}