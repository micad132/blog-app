import styled from "styled-components";


const Wrapper = styled.div`
    background: #0d9488;
    color: #fff;
    width: 800px;
    margin: 40px auto;
    padding: 20px 0;
`

const NotLoggedInComponent = () => {
    return (
        <Wrapper>
            <p>You are not logged in!</p>
        </Wrapper>
    )
}

export default NotLoggedInComponent;
