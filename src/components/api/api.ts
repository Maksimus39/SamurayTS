import axios from "axios";

type GetUsersProps = {
    currentPage: number;
    pageSize: number;
}
const apiKey = '45aee50a-c9c4-45c9-a45b-d5e0600355b0';
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
    },
    login(email: string, password: string, rememberMe: boolean) {
        return instance.post(`auth/login`, {email, password, rememberMe})
            .then(response => response.data);
    },
    logout() {
        return instance.delete(`auth/login`)
            .then(response => response.data);
    },
}
