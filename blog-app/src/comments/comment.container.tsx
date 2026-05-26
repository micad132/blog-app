import { useQuery } from "@apollo/client/react";
import { GET_COMMENTS } from "../graphql/queries/comments.queries.ts";
import LoadingSpinnerComponent from "../components/loadingSpinner.component.tsx";
import AddingCommentContainer from "./containers/addingComment.container.tsx";
import type { CommentFetchResponse } from "../types/commentsTypes.ts";
import SingleCommentComponent from "./components/singleComment.component.tsx";
import styled from "styled-components";

const StyledHeader = styled.h3`
    color: #fff;
`

const CommentContainer = () => {


    const { data, loading } = useQuery<CommentFetchResponse>(GET_COMMENTS);

    if(loading) {
        return <LoadingSpinnerComponent />
    }


    console.log('data', data);
    return (
        <div>
            <StyledHeader>There are {data?.comments?.length} comments in total. Here you can preview them</StyledHeader>
            <div>
                {data?.comments.map((com) =>
                    (
                    <SingleCommentComponent
                        id={com.id}
                        key={com.id}
                        text={com.text}
                        username={com.user.username}
                        createdAt={com.createdAt}
                    />
                    ))}
            </div>
            <AddingCommentContainer />
        </div>
    )
}

export default CommentContainer;
