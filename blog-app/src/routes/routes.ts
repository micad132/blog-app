import { createBrowserRouter } from "react-router";
import App from "../App.tsx";
import RegisterContainer from "../auth/register.container.tsx";
import LoginContainer from "../auth/login.container.tsx";
import CommentContainer from "../comments/comment.container.tsx";
import PostsContainer from "../posts/posts.container.tsx";
import ProtectedRouteComponent from "./protectedRoute.component.tsx";
import HomePageContainer from "../home/homePage.container.tsx";
import PageNotFoundComponent from "../components/pageNotFound.component.tsx";
import ProfilePageContainer from "../profile/profilePage.container.tsx";
import UsersPageContainer from "../users/usersPage.container.tsx";

export const routes = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
              index: true,
              Component: HomePageContainer,
            },
            { path: "/register",
                Component: RegisterContainer
            },
            {
                path: "/login",
                Component: LoginContainer,
            },
            {
                Component: ProtectedRouteComponent,
                children: [
                    {
                        path: "/comments",
                        Component: CommentContainer,
                    },
                    {
                        path: "/posts",
                        Component: PostsContainer,
                    },
                    {
                        path: "/users",
                        Component: UsersPageContainer,
                    },
                    {
                        path: '/me',
                        Component: ProfilePageContainer,
                    }
                ],
            },
            {
                path: '*',
                Component: PageNotFoundComponent,
            }
        ],
    },
])
