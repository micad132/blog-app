import styled from "styled-components";
import { formatDate } from "../../utils/formatters.ts";


const Wrapper = styled.div`
    background: #e5e4e7;
    width: 700px;
    margin: 10px auto;
    color: #000;
    border-radius: 5px;
    padding: 10px 0;
`


const CommentDetailsWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    padding: 0 0 0 15px;
`

const Username = styled.span`
    font-weight: bold;
`


interface Props {
    text: string,
    username: string,
    createdAt: string,
}

const SingleComment = ({ text, createdAt, username }: Props) => {
    return (
        <Wrapper>
            <CommentDetailsWrapper>
                <Username>{username}</Username>
                <span>{formatDate(createdAt)}</span>
            </CommentDetailsWrapper>
            {text}
        </Wrapper>
    )
}

export default SingleComment;
