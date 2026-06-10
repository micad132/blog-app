import styled from "styled-components";
import SingleComment from "../../comments/components/singleComment.component.tsx";
import { useQuery } from "@apollo/client/react";
import type { CommentFetchResponse } from "../../types/commentsTypes.ts";
import { GET_COMMENTS } from "../../graphql/queries/comments.queries.ts";
import LoadingSpinnerComponent from "../../components/loadingSpinner.component.tsx";

const CommentsContainerWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
`

const Header = styled.h5`
    font-weight: bold;
    color: #fff;
    padding-top: 10px;
`

const CommentsContentComponent = () => {
    const { data, loading } = useQuery<CommentFetchResponse>(GET_COMMENTS);

    if(loading) {
        return <LoadingSpinnerComponent />
    }

    return (
        <div>
            <Header>My comments: {data?.comments.length}</Header>
            <CommentsContainerWrapper>
                {data?.comments.map((comment) => (
                    <SingleComment
                        key={comment.id}
                        id={comment.id}
                        isDeletionPossible
                        text={comment.text}
                        createdAt={comment.createdAt}
                        username={comment.user.username}
                        isProfilePage={true}
                    />
                ))}
            </CommentsContainerWrapper>
        </div>

    )
}

export default CommentsContentComponent;
