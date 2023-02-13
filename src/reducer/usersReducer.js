const follow = 'FOLLOW';
const unfollow = 'UNFOLLOW';
const setUsers = 'SetUSERS'

let initialState = {
    users: [
        {id: 1, followed: true, fullName: 'Dima', status: "Kek", location: {city:"Moscow", county: "Russia"}},
        {id: 2, followed: false, fullName: 'Andrew', status: "lel", location: {city:"Moscow", county: "Russia"}},
        {id: 3, followed: true, fullName: 'Dima', status: "Lol", location: {city:"Moscow", county: "Russia"}}
    ]
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
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state;
    }
};
export const userFollowAC = (userId) => ({type: follow, userId});
export const userUnFollowAC = (userId) => ({type: unfollow, userId});
export const setUsersAC = (users) => ({type: setUsers, users});

export default userReducer;