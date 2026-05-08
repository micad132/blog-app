import { create } from "zustand/react";
import axios from "axios";
import { API_PATH } from "../utils/consts.ts";
import { type User, USER_DEFAULT_VALUES } from "../types/authTypes.ts";


export type AuthStore = {
    user: User,
    isLoading: boolean,
    error: string,
    checkAuth: () => void,
}

export const useAuthStore = create<AuthStore>((set) => ({
    user: USER_DEFAULT_VALUES,
    isLoading: false,
    error: '',

    checkAuth: async () => {
        set({ isLoading: true, error: '' });
        try {
            const res = await axios.get(`${API_PATH}/auth/me`);
            set({ user: res.data, error: '' });
        } catch {
            set({ user: USER_DEFAULT_VALUES, error: 'Unauthorized' });
        } finally {
            set({ isLoading: false });
        }
    },
}));
