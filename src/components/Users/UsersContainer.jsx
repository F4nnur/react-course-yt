import {connect} from "react-redux";
import {
    setCountAC,
    setCurrentPageAC, setFetching,
    setPageAC,
    setUsersAC,
    userFollowAC,
    userUnFollowAC
} from "../../reducer/usersReducer";
import React, {Component} from "react";
import Users from "./Users";
import Preloader from "../UI/Preloader";
import {usersAPI} from "../../api/api";

class UsersApiContainer extends Component {
    componentDidMount() {
        this.props.setIsFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.page).then(data => {
            this.props.setIsFetching(false)
            this.props.setUsers(data.items);
            this.props.setCount(data.totalCount);
        })
    }

    onPageChange = (page) => {
        this.props.setCurrentPage(page)
        this.props.setIsFetching(true)
        usersAPI.getUsers(page, this.props.page).then(data => {
            this.props.setIsFetching(false)
            this.props.setUsers(data.items);
        })
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
        },
        setIsFetching: (value) => {
            dispatch(setFetching(value))
        }
    }
};

const UsersContainer = connect(mapState, mapDispatch)(UsersApiContainer);

export default UsersContainer;