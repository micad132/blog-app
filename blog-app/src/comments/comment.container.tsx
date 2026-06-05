import { useQuery } from "@apollo/client/react";
import { GET_COMMENTS } from "../graphql/queries/comments.queries.ts";
import LoadingSpinnerComponent from "../components/loadingSpinner.component.tsx";
import AddingCommentContainer from "./containers/addingComment.container.tsx";
import type { CommentFetchResponse } from "../types/commentsTypes.ts";
import SingleCommentComponent from "./components/singleComment.component.tsx";
import styled from "styled-components";
import { useAuthStore } from "../store/authStore.ts";
import { UserRole } from "../types/authTypes.ts";

const StyledHeader = styled.h3`
    color: #fff;
`



const PageHeader = ({ amount, isAdmin }: { amount: number, isAdmin: boolean}) => {
    if(isAdmin) {
        return <StyledHeader>There are {amount} comments in total. Here you can preview them</StyledHeader>
    }
    else return <StyledHeader>Here are your all comments</StyledHeader>
}

const CommentContainer = () => {


    const { data, loading } = useQuery<CommentFetchResponse>(GET_COMMENTS);
    const { user: { role } } = useAuthStore();
    const isAdmin = role === UserRole.ADMIN;

    if(loading) {
        return <LoadingSpinnerComponent />
    }

    return (
        <div>
            <PageHeader
                amount={data?.comments.length || 0}
                isAdmin={isAdmin}
            />
            <div>
                {data?.comments.map((com) =>
                    (
                    <SingleCommentComponent
                        id={com.id}
                        key={com.id}
                        text={com.text}
                        username={com.user.username}
                        createdAt={com.createdAt}
                        isDeletionPossible={isAdmin}
                        isProfilePage={false}
                    />
                    ))}
            </div>
            <AddingCommentContainer />
        </div>
    )
}

export default CommentContainer;
