import SingleContentWrapperComponent from "./components/singleContentWrapper.component.tsx";
import styled from "styled-components";
import UserDetailsComponent from "./components/userDetails.component.tsx";


const MainWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
    width: 80%;
    max-width: 1400px;
    margin: 20px auto;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const ProfilePageContainer = () => {

    return (
        <MainWrapper>
            <UserDetailsComponent />
            <Wrapper>
                <SingleContentWrapperComponent title="My comments" />
                <SingleContentWrapperComponent title="My posts" />
            </Wrapper>
        </MainWrapper>
    )
}

export default ProfilePageContainer;
