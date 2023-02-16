import {connect} from "react-redux";
import {setUsersAC, userFollowAC, userUnFollowAC} from "../../reducer/usersReducer";
import UserC from "./UserC";


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

const UsersContainer = connect(mapState, mapDispatch)(UserC);

export default UsersContainer;