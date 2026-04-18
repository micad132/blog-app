import styled from "styled-components";
import type { ReactNode } from "react";

const Wrapper = styled.div`
    background: white;
    width: 70%;
    margin: 20px auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`

interface Props {
    children: ReactNode,
}

const AuthWrapper = ({ children }: Props) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}

export default AuthWrapper;
