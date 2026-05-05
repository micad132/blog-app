import { createBrowserRouter } from "react-router";
import App from "../App.tsx";
import RegisterContainer from "../auth/register.container.tsx";
import LoginContainer from "../auth/login.container.tsx";
import CommentContainer from "../comments/comment.container.tsx";
import PostsContainer from "../posts/posts.container.tsx";

export const routes = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            { path: "/register",
                Component: RegisterContainer
            },
            {
                path: "/login",
                Component: LoginContainer,
            },
            {
                path: "/comments",
                Component: CommentContainer,
            },
            {
                path: "/posts",
                Component: PostsContainer,
            }
        ],
    },
])
