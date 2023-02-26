const follow = 'FOLLOW';
const unfollow = 'UNFOLLOW';
const setUsers = 'SetUSERS';
const setCount = 'setCount';
const setPage = 'setPage';
const setCurrentPage = 'currentPage';
const toggleIsFetching = 'toggleIsFetching';
const toggleIsFollowing = 'toggleIsFollowing';

let initialState = {
    users: [],
    count: 20,
    page: 5,
    currentPage: 4,
    isFetching: true,
    isFollowed: [],
};

const userReducer = (state=initialState, action) => {
    switch (action.type) {
        case follow:
            return  {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case unfollow:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {
                            ...u, followed: false
                        }
                    }
                    return u;
                })
            }
        case setUsers:
            return {...state, users: action.users}
        case setCount:
            return {...state, count: action.count}
        case setPage:
            return {...state, page: action.page}
        case setCurrentPage:
            return {...state, currentPage: action.currentPage}
        case toggleIsFetching:
            return {...state, isFetching: action.isFetching}
        case toggleIsFollowing:
            return {...state, isFollowed: action.isFetching
                    ? [...state.isFollowed, action.userId]
                    : state.isFollowed.filter(id => id !== action.userId)}
        default:
            return state;
    }
};
export const userFollowAC = (userId) => ({type: follow, userId});
export const userUnFollowAC = (userId) => ({type: unfollow, userId});
export const setUsersAC = (users) => ({type: setUsers, users});
export const setCountAC = (count) => ({type: setCount, count});
export const setPageAC = (page) => ({type: setPage, page});
export const setCurrentPageAC = (currentPage) => ({type: setCurrentPage, currentPage});
export const setFetching = (isFetching) => ({type: toggleIsFetching, isFetching});
export const setFollowing = (isFollowed, userId) => ({type: toggleIsFollowing, isFollowed, userId});


export default userReducer;