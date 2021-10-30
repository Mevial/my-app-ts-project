import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "49ab6c75-ab9e-4861-b120-5af838a1df3c"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    follow(userId = 1) {
        return instance.post(`follow/${userId}`, {})

    },
    unfollow(userId = 1) {
        return instance.delete(`follow/${userId}`)

    },
}

export const profileAPI = {
    getProfile(userId = '1') {
        return instance.get<{ userId: number }>(`profile/${userId}`)
    },
    getStatus(userId = '1') {
        return instance.get<{ userId: number }>(`profile/status/${userId}`)
    },
    updateStatus(status = '') {
        return instance.put<{ data: {}, fieldsErrors: [], messages: [], resultCode: 0 }>(`profile/status`, {status: status})

    },
}

export const authAPI = {
    getAuth() {
        return instance.get(`auth/me`)
    },
    login(email = '', password = '', rememberMe = false) {
        return instance.post(`auth/login`, {email: email, password, rememberMe})
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}

