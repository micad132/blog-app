import './App.css'
import NavContainer from "./header/nav.container.tsx";
import {Outlet} from "react-router";

const  App = () => {
    return (
        <>
            <h1>Simple blog app - Nest.js with GraphQL</h1>
            <NavContainer />
            <Outlet />
        </>
    )
}

export default App
