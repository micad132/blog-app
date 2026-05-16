import { useAuthStore } from "../store/authStore.ts";
import NotLoggedInComponent from "../components/notLoggedIn.component.tsx";

const HomePageContainer = () => {

    const { isLogged } = useAuthStore();
    if(!isLogged) {
        return <NotLoggedInComponent />
    }
    return (
        <div>HOME</div>
    )
}

export default HomePageContainer;
