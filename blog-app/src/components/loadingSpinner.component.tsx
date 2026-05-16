import styled from "styled-components";
import { Spinner } from "@chakra-ui/react";


const Wrapper = styled.div`
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`

const LoadingSpinnerComponent = () => {

    return (
        <Wrapper>
            <Spinner
                size="xl"
            />
        </Wrapper>
    )
}

export default LoadingSpinnerComponent;
