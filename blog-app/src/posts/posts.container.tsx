import { useQuery } from "@apollo/client/react";
import type { CommentFetchResponse } from "../types/commentsTypes.ts";
import { GET_COMMENTS } from "../graphql/queries/comments.queries.ts";

const PostsContainer = () => {
    const { data } = useQuery<CommentFetchResponse>(GET_COMMENTS);

    console.log('data z posts', data);
    return (
        <div>
            POSTY
        </div>
    )
}

export default PostsContainer;
