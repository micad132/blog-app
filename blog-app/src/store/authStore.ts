import { create } from "zustand/react";
import axios from "axios";
import { API_PATH } from "../utils/consts.ts";
import { type Login, type User, USER_DEFAULT_VALUES } from "../types/authTypes.ts";
import { ErrorObj } from "../utils/errorObj.ts";


export type AuthStore = {
    user: User,
    isLogged: boolean,
    isLoading: boolean,
    error: string,
    checkAuth: () => void,
    login: (loginDto: Login) => Promise<void>,
    logout: () => void,
    setUserData: (data: Partial<User>) => void,
}

export const useAuthStore = create<AuthStore>((set) => ({
    user: USER_DEFAULT_VALUES,
    isLoading: true,
    error: '',
    isLogged: false,
    checkAuth: async () => {
        set({ isLoading: true, error: '' });
        try {
            const res = await axios.get(`${API_PATH}/auth/me`);
            set({ user: res.data, error: '', isLogged: true });
        } catch {
            set({ user: USER_DEFAULT_VALUES, error: 'Unauthorized' });
        } finally {
            set({ isLoading: false });
        }
    },
    login: async (loginDto: Login) => {
        try {
            const res = await axios.post(`${API_PATH}/auth/login`, loginDto, { withCredentials: true })
            set({ user: res.data, error: '', isLogged: true })
        } catch (e) {
            console.log('catch', e);
            if(axios.isAxiosError(e)) {
                throw new ErrorObj(
                    e.response?.status ?? 500,
                    e.response?.data?.message ?? 'Unknown error!',
                )
            }
            throw e;
        }
    },
    logout: async () => {
        try {
            await axios.post(`${API_PATH}/auth/logout`)
            set({ isLogged: false })
        } catch (e) {
            if(axios.isAxiosError(e)) {
                throw new ErrorObj(
                    e.response?.status ?? 500,
                    e.response?.data?.message ?? 'Unknown error!',
                )
            }
            throw e;
        }
    },
    setUserData: (data: Partial<User>) => {
        set((state) => ({ user: { ...state.user, ...data } }))
    }
}));
