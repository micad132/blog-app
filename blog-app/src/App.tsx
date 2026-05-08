import './App.css'
import NavContainer from "./header/nav.container.tsx";
import { Outlet } from "react-router";
import HeaderContainer from "./header/header.container.tsx";
import { useAuthStore } from "./store/authStore.ts";
import { useEffect } from "react";

const App = () => {
    const { checkAuth, isLoading } = useAuthStore();

    useEffect(() => {
        checkAuth();
    }, []);

    if(isLoading) {
        return 'Loading...';
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
