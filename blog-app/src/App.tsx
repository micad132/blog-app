import './App.css'
import NavContainer from "./header/nav.container.tsx";
import { Outlet } from "react-router";
import HeaderContainer from "./header/header.container.tsx";

const App = () => {
    return (
        <>
            <HeaderContainer/>
            <NavContainer/>
            <Outlet/>
        </>
    )
}

export default App
