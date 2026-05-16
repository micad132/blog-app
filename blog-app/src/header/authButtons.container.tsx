import { Button } from "@chakra-ui/react";
import styled from "styled-components";
import { useNavigate } from "react-router";
import { useAuthStore } from "../store/authStore.ts";

const ButtonsWrapper = styled.div`
    display: flex;
    gap: 10px;
`

const AuthButtonsContainer = () => {
    const navigate = useNavigate();
    const { isLogged, logout } = useAuthStore();


    const getProperButton = () => {
        if(isLogged) {
            return (
                <Button
                    colorPalette="teal"
                    variant="solid"
                    onClick={() => logout()}
                >
                    Log out
                </Button>
            )
        }
        return (
            <Button colorPalette="teal"
                    variant="solid"
                    onClick={() => navigate("/login")}>
                Login
            </Button>
        )
    }

    return (
        <ButtonsWrapper>
            {getProperButton()}
        </ButtonsWrapper>
    )
}

export default AuthButtonsContainer;
