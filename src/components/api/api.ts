import axios from "axios";

type GetUsersProps = {
    currentPage: number;
    pageSize: number;
}
const apiKey = '1ad19dbf-2b22-4d89-9659-c3f9ebb82d62';
const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': apiKey
    }
})

export const usersApi = {
    async getUsers({currentPage, pageSize}: GetUsersProps) {
        const response = await instance.get(`users?page=${currentPage}&count=${pageSize}`);
        return response.data;

    },
    async getProfile(userId: number) {
        const response = await instance.get(`profile/${userId}`);
        return response.data;
    },
    async unfollowUser(userId: number) {
        const response = await instance.delete(`follow/${userId}`);
        return response.data;
    },
    async followUser(userId: number) {
        const response = await instance.post(`follow/${userId}`, {});
        return response.data;
    },
    async getAuthUserData() {
        const response = await instance.get(`auth/me`);
        return response.data;
    },
    async getStatus(userId: number) {
        const response = await instance.get(`profile/status/${userId}`);
        return response.data;
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status: status})
    },
    async login(email: string, password: string, rememberMe: boolean) {
        const response = await instance.post(`auth/login`, {email, password, rememberMe});
        return response.data;
    },
    async logout() {
        const response = await instance.delete(`auth/login`);
        return response.data;
    },
}
