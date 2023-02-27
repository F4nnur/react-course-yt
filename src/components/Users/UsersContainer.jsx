import {connect} from "react-redux";
import {
    getUOnPng,
    getUsers, onFollow, onUnFollow,
    setCountAC,
    setFetching, setFollowing,
    setPageAC,
    setUsersAC,
} from "../../reducer/usersReducer";
import React, {Component} from "react";
import Users from "./Users";
import Preloader from "../UI/Preloader";

class UsersApiContainer extends Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.page)
    }

    onPageChange = (page) => {
        this.props.getUOnPageChe(page, this.props.page)
    }

    render() {
        return (<>
                {this.props.isFetching ? <Preloader/> :
                    <Users
                        currentPage={this.props.currentPage}
                        onPageChange={this.onPageChange}
                        users={this.props.users}
                        onUserUnFollow={this.props.onUserUnFollow}
                        onUserFollow={this.props.onUserFollow}
                        count={this.props.count}
                        page={this.props.page}
                        setFollow={this.props.setFollowing}
                        {...this.props}
                    />
                }
            </>
        );
    }
}

let mapState = (state) => {
    return {
        users: state.usersPage.users,
        count: state.usersPage.count,
        page: state.usersPage.page,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        following: state.usersPage.isFollowed,
    }
};

let mapDispatch = (dispatch) => {
    return {
        getUOnPageChe: (currenPage, page) => {
          dispatch(getUOnPng(currenPage, page))
        },
        getUsers: (page, count) => {
          dispatch(getUsers(page,count))
        },
        onUserFollow: (useId) => {
            dispatch(onFollow(useId))
        },
        onUserUnFollow: (userId) => {
            dispatch(onUnFollow(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setPage: (page) => {
            dispatch(setPageAC(page))
        },
        setCount: (count) => {
            dispatch(setCountAC(count))
        },
        setIsFetching: (value) => {
            dispatch(setFetching(value))
        },
        setFollowing: (value, id) => {
            dispatch(setFollowing(value, id))
    }
    }
};

const UsersContainer = connect(mapState, mapDispatch)(UsersApiContainer);

export default UsersContainer;