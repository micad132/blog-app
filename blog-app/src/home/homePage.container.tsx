import { useAuthStore } from "../store/authStore.ts";
import NotLoggedInComponent from "../components/notLoggedIn.component.tsx";

const HomePageContainer = () => {

    const { user } = useAuthStore();


    if(user.username === '') {
        return <NotLoggedInComponent />
    }
    return (
        <div>HOME</div>
    )
}

export default HomePageContainer;
