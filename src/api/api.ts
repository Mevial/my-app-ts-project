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
    }
}

export const profileAPI = {
    getProfile(userId = '1') {
        return instance.get<{ userId: number }>(`profile/${userId}`)
            .then(response => {
                return response.data
            })
    }
}

export const authAPI = {
    getAuth() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            })
    }
}


export const followUnfollowAPI = {
    deleteSubscribe(id = 1) {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data
            })
    },
    postSubscribe(id = 1) {
        return instance.post(`follow/${id}`, {})
            .then(response => {
                return response.data
            })
    }
}