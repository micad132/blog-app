import { useAuthStore } from "../store/authStore.ts";
import NotLoggedInComponent from "../components/notLoggedIn.component.tsx";
import { Outlet } from "react-router";
import LoadingSpinnerComponent from "../components/loadingSpinner.component.tsx";


const ProtectedRouteComponent = () => {
    const { isLogged, isLoading } = useAuthStore();

    if (isLoading) {
        return (
            <LoadingSpinnerComponent />
        )
    }

    if(!isLogged) {
        return (
            <NotLoggedInComponent />
        )
    }

    return (
        <Outlet />
    )
}

export default ProtectedRouteComponent;
