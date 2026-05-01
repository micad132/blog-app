import AuthButtonsContainer from "./authButtons.container.tsx";
import styled from "styled-components";


const HeaderWrapper = styled.header`
    display: flex;
    padding: 0 20px;
    align-items: center;
    justify-content: space-between;
`

const HeaderContainer = () => {
    return (
        <HeaderWrapper>
            <h1>Simple blog app - Nest.js with GraphQL</h1>
            <AuthButtonsContainer />
        </HeaderWrapper>
    )
}

export default HeaderContainer;
