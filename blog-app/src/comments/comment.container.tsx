import { useQuery } from "@apollo/client/react";
import { GET_COMMENTS } from "../graphql/queries/comments.queries.ts";
import LoadingSpinnerComponent from "../components/loadingSpinner.component.tsx";
import AddingCommentContainer from "./containers/addingComment.container.tsx";

const CommentContainer = () => {


    const { data, loading } = useQuery(GET_COMMENTS);

    if(loading) {
        return <LoadingSpinnerComponent />
    }


    console.log('data', data);
    return (
        <div>
            KOMENTARZE
            <AddingCommentContainer />
        </div>
    )
}

export default CommentContainer;
