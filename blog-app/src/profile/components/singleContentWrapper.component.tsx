import styled from "styled-components";


const Wrapper = styled.div`
    background: teal;
    border-radius: 10px;
    width: 700px;
    height: 300px;
`

const Header = styled.h5`
    font-weight: bold;
    color: #fff;
    padding-top: 10px;
`

interface Props {
    title: string,
}


export const SingleContentWrapperComponent = ({ title }: Props) => {

    return (
        <Wrapper>
            <Header>{title}</Header>
        </Wrapper>
    )
}

export default SingleContentWrapperComponent;
