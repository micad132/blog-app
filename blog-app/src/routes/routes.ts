import {createBrowserRouter} from "react-router";
import App from "../App.tsx";
import RegisterContainer from "../auth/register.container.tsx";
import LoginContainer from "../auth/login.container.tsx";

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
        ],
    },
])
