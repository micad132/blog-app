import AuthWrapper from "./components/authWrapper.component.tsx";
import type { Register } from "../types/authTypes.ts";
import { useState } from "react";
import AuthInput from "./components/authInput.component.tsx";
import { FaLock, FaRegUser, FaCity } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import { Button } from "@chakra-ui/react";
import { Toaster, toaster } from "../components/ui/toaster.tsx";
import { registerValidation } from "../utils/validators.tsx";
import { registerRequest } from "./api/authRequests.ts";
import { ErrorObj } from "../utils/errorObj.ts";
import { useNavigate } from "react-router";

const RegisterContainer = () => {

    const navigate = useNavigate();
    const [registerValues, setRegisterValues] = useState<Register>({
        username: '',
        password: '',
        confirmPassword: '',
        city: '',
        country: '',
    })

    const handleValueChange = (value: string, key: keyof Register)=> {
        setRegisterValues((prevState) => ({
            ...prevState,
            [key]: value,
        }))
    }

    const handleRegister = async (e: SubmitEvent) => {
        e.preventDefault();
        const { isInvalid, errorMessage } = registerValidation(registerValues.username, registerValues.password, registerValues.confirmPassword, registerValues.city);
        if(isInvalid) {
            toaster.create({
                title: 'Register validation error!',
                description: errorMessage,
                type: 'error',
                closable: true,
            })
            return;
        }
        try {
            await registerRequest({ username: registerValues.username, password: registerValues.password,
                city: registerValues.city, country: registerValues.country });
            setRegisterValues({ username: '', city: '', password: '', confirmPassword: '', country: '' });
            toaster.create({
                title: "Success!",
                description: "You were successfully registered! Now you can log in",
                closable: true,
                type: 'success',
            })
            setTimeout(() => {
                navigate('/login');
            }, 1500)
        } catch (e) {
            if(e instanceof ErrorObj) {
                toaster.create({
                    title: "Error",
                    description: e.message,
                    closable: true,
                    type: 'error',
                })
            }
        }

    }
    return (
        <AuthWrapper onSubmit={handleRegister}>
            <AuthInput
                icon={<FaRegUser />}
                placeholder="Username"
                value={registerValues.username}
                onChange={(value) => handleValueChange(value, 'username')}
                label="Username"
                isPassword={false}
            />
            <AuthInput
                icon={<FaLock />}
                placeholder="Password"
                value={registerValues.password}
                onChange={(value) => handleValueChange(value, 'password')}
                label="Password"
                isPassword={true}
            />
            <AuthInput
                icon={<FaLock />}
                placeholder="Confirm password"
                value={registerValues.confirmPassword}
                onChange={(value) => handleValueChange(value, 'confirmPassword')}
                label="Confirm password"
                isPassword={true}
            />
            <AuthInput
                icon={<FaCity />}
                placeholder="City"
                value={registerValues.city}
                onChange={(value) => handleValueChange(value, 'city')}
                label='City'
                isPassword={false}
            />
            <AuthInput
                icon={<BiWorld />}
                placeholder="Country"
                value={registerValues.country}
                onChange={(value) => handleValueChange(value, 'country')}
                label='Country'
                isPassword={false}
            />
            <Button type="submit">
                Register
            </Button>
            <Toaster />
        </AuthWrapper>
    )
}

export default RegisterContainer;
