import axios from "axios";

type GetUsersProps = {
    currentPage: number;
    pageSize: number;
}
const apiKey = 'e6eaa2aa-df7a-4193-8c16-782484153fda';
const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': apiKey
    }
})

export const usersApi = {
    getUsers({currentPage, pageSize}: GetUsersProps) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);

    },
    getProfile(userId: number) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data);
    },
    unfollowUser(userId: number) {
        return instance.delete(`follow/${userId}`).then(response => response.data);
    },
    followUser(userId: number) {
        return instance.post(`follow/${userId}`, {}).then(response => response.data);
    },
    getAuthUserData() {
        return instance.get(`auth/me`).then(response => response.data);
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/${userId}`).then(response => response.data);
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status: status})
    }
}
