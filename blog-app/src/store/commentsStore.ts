import { create } from "zustand/react";
import axios from "axios";
import { API_PATH } from "../utils/consts.ts";
import { type Login,  USER_DEFAULT_VALUES } from "../types/authTypes.ts";
import { ErrorObj } from "../utils/errorObj.ts";
import type { Comment, CommentRequestDTO } from "../types/commentsTypes.ts";
import { useQuery } from "@apollo/client/react";
import { GET_COMMENTS } from "../graphql/queries/comments.queries.ts";


export type CommentsStore = {
    comments: Comment[],
    isLoading: boolean,
    error: string,
    fetchComments: () => void,
    addComment: (text: string) => void,
}

export const useCommentsStore = create<CommentsStore>((set) => ({
    comments: [],
    isLoading: true,
    error: '',
    fetchComments: async () => {
        set({ isLoading: true, error: '' });
        try {
            const { data, loading } = useQuery(GET_COMMENTS);
            set({ comments: data, error: '' });
        } catch {
            set({ comments: [], error: 'Error' });
        } finally {
            set({ isLoading: false });
        }
    },
    addComment: async (text: string) => {
        try {
            const { data, loading } = useQuery()
            set({ user: res.data, error: '', isLogged: true })
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
}));
