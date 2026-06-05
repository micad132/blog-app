import styled from "styled-components";
import type { ReactNode } from "react";


const Wrapper = styled.div`
    background: teal;
    border-radius: 10px;
    width: 700px;
    height: 300px;
    overflow: auto;
`

const Header = styled.h5`
    font-weight: bold;
    color: #fff;
    padding-top: 10px;
`

interface Props {
    title: string,
    children: ReactNode,
}


export const SingleContentWrapperComponent = ({ title, children }: Props) => {

    return (
        <Wrapper>
            <Header>{title}</Header>
            {children}
        </Wrapper>
    )
}

export default SingleContentWrapperComponent;
