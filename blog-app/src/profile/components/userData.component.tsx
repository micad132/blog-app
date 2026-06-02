import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    gap: 5px;
`

const TitleSpan = styled.span`
    font-weight: bold;
`


interface Props {
    title: string,
    data: string,
}

const UserDataComponent = ({ title, data }: Props) => {

    return(
        <Wrapper>
            <TitleSpan>{title}</TitleSpan>
            <span>{data}</span>
        </Wrapper>
    )
}

export default UserDataComponent;
