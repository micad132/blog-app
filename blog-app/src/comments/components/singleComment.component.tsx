import styled from "styled-components";
import { formatDate } from "../../utils/formatters.ts";
import { FaTrash } from "react-icons/fa";
import { IconButton } from "@chakra-ui/react";
import { useMutation } from "@apollo/client/react";
import { CombinedGraphQLErrors } from "@apollo/client";
import { REMOVE_COMMENT } from "../../graphql/queries/comments.queries.ts";
import { toaster } from "../../components/ui/toaster.tsx";

const Wrapper = styled.div<{ $isProfilePage: boolean }>`
    background: #e5e4e7;
    width: 100%;
    max-width: ${props => (props.$isProfilePage ? "300px" : "700px")};
    margin: 10px auto;
    color: #000;
    border-radius: 5px;
    padding: 10px 0;
`;

const DetailsWithIcon = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 20px;
`;

const CommentDetailsWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    padding: 0 0 0 15px;
`;

const Username = styled.span`
    font-weight: bold;
`;

const Text = styled.p`
    padding: 8px 15px 0;
    margin: 0;
    word-break: break-word;
`;

interface Props {
    text: string;
    username: string;
    createdAt: string;
    id: number;
    isDeletionPossible: boolean;
    isProfilePage?: boolean;
}

const SingleComment = ({
                           text,
                           createdAt,
                           username,
                           id,
                           isDeletionPossible,
                           isProfilePage = false,
                       }: Props) => {
    const [deleteComment, { loading }] = useMutation(REMOVE_COMMENT, {
        refetchQueries: ["GetComments"],
    });

    const handleDelete = async () => {
        try {
            await deleteComment({ variables: { id } });
            toaster.create({
                title: "Success",
                description: `You successfully removed comment with id: ${id}`,
                closable: true,
                type: "success",
            });
        } catch (e) {
            const description = CombinedGraphQLErrors.is(e)
                ? e.errors[0]?.message ?? "Unknown error"
                : "Something went wrong while removing the comment";
            toaster.create({ title: "Error", description, type: "error" });
        }
    };

    return (
        <Wrapper $isProfilePage={isProfilePage}>
            <DetailsWithIcon>
                <CommentDetailsWrapper>
                    <Username>{username}</Username>
                    <span>{formatDate(createdAt)}</span>
                </CommentDetailsWrapper>
                {isDeletionPossible && (
                    <IconButton
                        aria-label={`Delete comment by ${username}`}
                        size="sm"
                        variant="ghost"
                        onClick={handleDelete}
                        loading={loading}
                    >
                        <FaTrash />
                    </IconButton>
                )}
            </DetailsWithIcon>
            <Text>{text}</Text>
        </Wrapper>
    );
};

export default SingleComment;
