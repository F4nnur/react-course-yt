import {connect} from "react-redux";
import {
    setCountAC,
    setCurrentPageAC,
    setPageAC,
    setUsersAC,
    userFollowAC,
    userUnFollowAC
} from "../../reducer/usersReducer";
import React, {Component} from "react";
import axios from "axios";
import Users from "./Users";

class UsersApiContainer extends Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.page}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setCount(response.data.totalCount);
        })
    }
    onPageChange = (page) =>  {
        this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.page}`).then(response => {
            this.props.setUsers(response.data.items);
        })
    }


    render() {
        return (
            <Users
                currentPage={this.props.currentPage}
                onPageChange={this.onPageChange}
                users={this.props.users}
                onUserUnFollow={this.props.onUserUnFollow}
                onUserFollow={this.props.onUserFollow}
                count={this.props.count}
                page={this.props.page}
            />
        );
    }
}

let mapState = (state) => {
    return {
        users: state.usersPage.users,
        count: state.usersPage.count,
        page: state.usersPage.page,
        currentPage: state.usersPage.currentPage
    }
};

let mapDispatch = (dispatch) => {
    return {
        onUserFollow: (useId) => {
            dispatch(userFollowAC(useId))
        },
        onUserUnFollow: (userId) => {
            dispatch(userUnFollowAC(userId))
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
        setCurrentPage: (page) => {
            dispatch(setCurrentPageAC(page))
        }
    }
};

const UsersContainer = connect(mapState, mapDispatch)(UsersApiContainer);

export default UsersContainer;