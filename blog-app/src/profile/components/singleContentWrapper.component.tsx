import styled from "styled-components";
import type { ReactNode } from "react";


const Wrapper = styled.div`
    background: teal;
    border-radius: 10px;
    width: 700px;
    height: 300px;
    overflow: auto;
`



interface Props {
    children: ReactNode,
}


export const SingleContentWrapperComponent = ({ children }: Props) => {

    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}

export default SingleContentWrapperComponent;
