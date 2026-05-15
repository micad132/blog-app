import styled from "styled-components";

const Wrapper = styled.div`
    background: #0d9488;
    color: #fff;
    width: 800px;
    margin: 40px auto;
    padding: 20px 0;
`

const PageNotFoundComponent = () => {

    return (
        <Wrapper>
            <p>Page not found!</p>
        </Wrapper>
    )
}

export default PageNotFoundComponent;
