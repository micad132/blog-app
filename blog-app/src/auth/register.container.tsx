import AuthWrapper from "./components/authWrapper.component.tsx";
import type { Register } from "../types/authTypes.ts";
import { useState } from "react";
import AuthInput from "./components/authInput.component.tsx";
import {FaLock, FaRegUser, FaCity} from "react-icons/fa";
import {Button} from "@chakra-ui/react";
import axios from "axios";

const RegisterContainer = () => {

    const [registerValues, setRegisterValues] = useState<Register>({
        username: '',
        password: '',
        confirmPassword: '',
        city: '',
    })

    const handleValueChange = (value: string, key: keyof Register)=> {
        setRegisterValues((prevState) => ({
            ...prevState,
            [key]: value,
        }))
    }

    const handleRegister = async () => {
        // api register call
        await axios.post(`http://localhost:3000/auth//register`, { username: registerValues.username,
            password: registerValues.password, city: registerValues.city})
        console.log('register values', registerValues);
    }
    return (
        <AuthWrapper>
            <AuthInput
                icon={<FaRegUser />}
                placeholder={'Username'}
                value={registerValues.username}
                onChange={(value) => handleValueChange(value, 'username')}
                label={'Username'}
            />
            <AuthInput
                icon={<FaLock />}
                placeholder={'Password'}
                value={registerValues.password}
                onChange={(value) => handleValueChange(value, 'password')}
                label={'Password'}
            />
            <AuthInput
                icon={<FaLock />}
                placeholder={'Confirm password'}
                value={registerValues.confirmPassword}
                onChange={(value) => handleValueChange(value, 'confirmPassword')}
                label={'Confirm password'}
            />
            <AuthInput
                icon={<FaCity />}
                placeholder={'City'}
                value={registerValues.city}
                onChange={(value) => handleValueChange(value, 'city')}
                label='City'
            />
            <Button onClick={handleRegister}>
                Register
            </Button>
        </AuthWrapper>
    )
}

export default RegisterContainer;
