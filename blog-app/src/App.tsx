import './App.css'
import LoginContainer from "./auth/login.container.tsx";
import RegisterContainer from "./auth/register.container.tsx";

const  App = () => {
    return (
        <>
            <h1>Simple blog app - Nest.js with GraphQL</h1>
            <LoginContainer />
            <RegisterContainer />
        </>
    )
}

export default App
