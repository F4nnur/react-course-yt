const follow = 'FOLLOW';
const unfollow = 'UNFOLLOW';
const setUsers = 'SetUSERS';
const setCount = 'setCount';
const setPage = 'setPage';
const setCurrentPage = 'currentPage';

let initialState = {
    users: [],
    count: 20,
    page: 5,
    currentPage: 4
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


export default userReducer;