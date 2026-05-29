import { Button, Icon } from "@chakra-ui/react";
import styled from "styled-components";
import { FaUser } from "react-icons/fa6";
import { useNavigate } from "react-router";
import { useAuthStore } from "../store/authStore.ts";

const ButtonsWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`

const StyledIcon = styled(Icon)`
    cursor: pointer;
`

const AuthButtonsContainer = () => {
    const navigate = useNavigate();
    const { isLogged, logout } = useAuthStore();


    const getProperButton = () => {
        if(isLogged) {
            return (
                <ButtonsWrapper>
                        <StyledIcon
                            onClick={() => navigate('/me')}
                            size="lg"
                            color="white"
                        >
                            <FaUser />
                        </StyledIcon>
                    <Button
                        colorPalette="teal"
                        variant="solid"
                        onClick={() => logout()}
                    >
                        Log out
                    </Button>
                </ButtonsWrapper>

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
        <div>
            {getProperButton()}
        </div>
    )
}

export default AuthButtonsContainer;
