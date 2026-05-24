import styled from "styled-components";
import type { ReactNode } from "react";

const Wrapper = styled.form`
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
    onSubmit: (e: any) => void,
}

const AuthWrapper = ({ children, onSubmit }: Props) => {
    return (
        <Wrapper
            onSubmit={(e) => onSubmit(e)}
            noValidate={true}
        >
            {children}
        </Wrapper>
    )
}

export default AuthWrapper;
