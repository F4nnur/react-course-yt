import {connect} from "react-redux";
import {
    setCountAC,
    setCurrentPageAC,
    setPageAC,
    setUsersAC,
    userFollowAC,
    userUnFollowAC
} from "../../reducer/usersReducer";
import UserC from "./UserC";


let mapState = (state) => {
    return {
        users: state.usersPage.users,
        count: state.usersPage.count,
        page: state.usersPage.page,
        currentPage: state.usersPage.currentPage
    }
}

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
}

const UsersContainer = connect(mapState, mapDispatch)(UserC);

export default UsersContainer;