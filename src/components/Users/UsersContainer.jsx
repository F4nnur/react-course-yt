import Users from "./Users";
import {connect} from "react-redux";
import {setUsersAC, userFollowAC, userUnFollowAC} from "../../reducer/usersReducer";


let mapState = (state) => {
    return{
        users: state.usersPage.users
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
      }
    }
}

const UsersContainer = connect(mapState, mapDispatch)(Users);

export default UsersContainer;