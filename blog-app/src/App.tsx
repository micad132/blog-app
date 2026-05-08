import './App.css'
import NavContainer from "./header/nav.container.tsx";
import { Outlet } from "react-router";
import HeaderContainer from "./header/header.container.tsx";
import { useAuthStore } from "./store/authStore.ts";
import { useEffect } from "react";
import NotLoggedInComponent from "./components/notLoggedIn.component.tsx";

const App = () => {
    const { checkAuth, isLoading, user } = useAuthStore();

    useEffect(() => {
        checkAuth();
    }, []);

    if (isLoading) {
        return 'Loading...';
    }

    if (user.username === '') {
        return (
            <>
                <HeaderContainer/>
                <NotLoggedInComponent />
            </>
        )
    }

    return (
        <>
            <HeaderContainer/>
            <NavContainer/>
            <Outlet/>
        </>
    )
}

export default App
