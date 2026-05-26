import './App.css'
import NavContainer from "./header/nav.container.tsx";
import { Outlet } from "react-router";
import HeaderContainer from "./header/header.container.tsx";
import { useEffect } from "react";
import { useAuthStore } from "./store/authStore.ts";
import LoadingSpinnerComponent from "./components/loadingSpinner.component.tsx";
import { Toaster } from "./components/ui/toaster.tsx";

const App = () => {

    const { checkAuth, isLoading } = useAuthStore();

    useEffect(() => {
        checkAuth();
    }, [])

    if(isLoading) {
        return <LoadingSpinnerComponent />
    }

    return (
        <>
            <HeaderContainer/>
            <NavContainer/>
            <Outlet/>
            <Toaster />
        </>
    )
}

export default App
