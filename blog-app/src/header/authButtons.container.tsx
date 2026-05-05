import { Button } from "@chakra-ui/react";
import styled from "styled-components";
import { useNavigate } from "react-router";

const ButtonsWrapper = styled.div`
    display: flex;
    gap: 10px;
`

const AuthButtonsContainer = () => {
    const navigate = useNavigate();


    return (
        <ButtonsWrapper>
            <Button colorPalette="teal"
variant="solid"
onClick={() =>  navigate("/login")}>
                Login
            </Button>
            <Button colorPalette="teal"
variant="solid"
onClick={() =>  navigate("/register")}>
                Register
            </Button>
        </ButtonsWrapper>
    )
}

export default AuthButtonsContainer;
