const follow = 'FOLLOW';
const unfollow = 'UNFOLLOW';
const setUsers = 'SetUSERS';
const setCount = 'setCount';
const setPage = 'setPage';
const setCurrentPage = 'currentPage';
const toggleIsFetching = 'toggleIsFetching';

let initialState = {
    users: [],
    count: 20,
    page: 5,
    currentPage: 4,
    isFetching: true,
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


export default userReducer;