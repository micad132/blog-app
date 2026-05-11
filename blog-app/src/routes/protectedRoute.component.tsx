import { Spinner } from "@chakra-ui/react"
import { useAuthStore } from "../store/authStore.ts";
import NotLoggedInComponent from "../components/notLoggedIn.component.tsx";
import { Outlet } from "react-router";


const ProtectedRouteComponent = () => {
    const { user, isLoading } = useAuthStore();
    if (isLoading) {
        return (
            <Spinner
                color="teal.500"
                size="lg"
            />
        )
    }

    if(!user || user.username === '') {
        return (
            <NotLoggedInComponent />
        )
    }

    return (
        <Outlet />
    )
}

export default ProtectedRouteComponent;
