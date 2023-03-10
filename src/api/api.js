import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {"API-KEY": "27115d36-cbfe-40d3-9944-a93868f77350"}
})

export const usersAPI = {
    getUsers(currentPage = 1, page = 10) {
        return instance.get(`users?page=${currentPage}&count=${page}`)
            .then(response => {
                return response.data
            })
    },
    onUnFollow(id) {
        return instance.delete(`folLow/${id}`)
            .then(response => {
                return response.data
            })
    },
    onFollow(id) {
        return instance.post(`folLow/${id}`)
            .then(response => {
                return response.data
            })
    }
}

export const profileAPI = {
    getProfile(userId = 2) {
        return instance.get(`profile/${userId}`)
            .then(response => {
                return response.data
            })
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance.put('profile/status', {status: status})
    }
}

export const authAPI = {
    authMe() {
        return instance.get('auth/me')
            .then(response => {
                return response.data
            })
    }
}