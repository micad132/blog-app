import AuthWrapper from "./components/authWrapper.component.tsx";
import AuthInput from "./components/authInput.component.tsx";
import { FaRegUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { useState } from "react";
import type { Login } from "../types/authTypes.ts";
import { Button } from "@chakra-ui/react";
import { loginRequest } from "./api/authRequests.ts";


const LoginContainer = () => {

    const [loginValues, setLoginValues] = useState<Login>({ username: '', password: '' });

    const handleUsernameChange = (username: string) => {
        setLoginValues((prevState)  => ({
            ...prevState,
            username,
        }))
    }

    const handlePasswordChange = (password: string) => {
        setLoginValues((prevState)  => ({
            ...prevState,
            password,
        }))
    }

    const handleLogin = async () => {
        console.log('login values', loginValues);
        const data = await loginRequest({ username: loginValues.username, password: loginValues.password });
        console.log('data', data);
    }

    return (
        <AuthWrapper>
            <AuthInput
                value={loginValues.username}
                icon={<FaRegUser />}
                placeholder={'Username'}
                onChange={handleUsernameChange}
                label={'Username'}
                isPassword={false}
            />
            <AuthInput
                value={loginValues.password}
                icon={<FaLock />}
                placeholder={'Password'}
                onChange={handlePasswordChange}
                label={'Password'}
                isPassword={true}
            />
            <Button onClick={handleLogin}>
                Login
            </Button>
        </AuthWrapper>
    )
}

export default LoginContainer;
