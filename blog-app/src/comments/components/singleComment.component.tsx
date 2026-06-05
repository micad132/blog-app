import styled from "styled-components";
import { formatDate } from "../../utils/formatters.ts";
import { FaTrash } from "react-icons/fa";
import { Icon } from "@chakra-ui/react";
import { useMutation } from "@apollo/client/react";
import { REMOVE_COMMENT } from "../../graphql/queries/comments.queries.ts";
import { toaster } from "../../components/ui/toaster.tsx";
import { CombinedGraphQLErrors } from "@apollo/client";


const Wrapper = styled.div<{ $isProfilePage?: boolean; }>`
    background: #e5e4e7;
    width: ${props => props.$isProfilePage ? '300px' : '700px'};
    margin: 10px auto;
    color: #000;
    border-radius: 5px;
    padding: 10px 0;
`


const DetailsWithIcon = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 20px;
`

const CommentDetailsWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    padding: 0 0 0 15px;
`

const IconWrapper = styled.div`
    cursor: pointer;
`

const Username = styled.span`
    font-weight: bold;
`


interface Props {
    text: string,
    username: string,
    createdAt: string,
    id: number,
    isDeletionPossible: boolean,
    isProfilePage: boolean,
}

const SingleComment = ({ text, createdAt, username, id, isDeletionPossible,
                           isProfilePage }: Props) => {

    const [deleteComment ] = useMutation(REMOVE_COMMENT, { refetchQueries: ['GetComments'] });


    const handleDelete = async () => {
        try {
            await deleteComment({
                variables: { id },
            });
            toaster.create({
                title: "Success",
                description: `You successfully removed comment with id: ${id}`,
                closable: true,
                type: 'success',
            })
        } catch (e) {
            if (CombinedGraphQLErrors.is(e)) {
                toaster.create({
                    title: 'Error',
                    description: e.errors[0].message,
                    type: 'error',
                });
            }

        }
    };

    return (
        <Wrapper $isProfilePage={isProfilePage}>
            <DetailsWithIcon>
                <CommentDetailsWrapper>
                    <Username>{username}</Username>
                    <span>{formatDate(createdAt)}</span>
                </CommentDetailsWrapper>
                {isDeletionPossible && <IconWrapper>
                    <Icon
                        size="md"
                        onClick={handleDelete}
                    >
                        <FaTrash />
                    </Icon>
                </IconWrapper>}
            </DetailsWithIcon>
            {text}
        </Wrapper>
    )
}

export default SingleComment;
