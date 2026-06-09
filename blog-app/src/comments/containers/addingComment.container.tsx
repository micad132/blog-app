import { Field, Textarea } from "@chakra-ui/react"
import { useState } from "react";
import styled from "styled-components";
import { useMutation } from "@apollo/client/react";
import { CREATE_COMMENT } from "../../graphql/queries/comments.queries.ts";
import LoadingSpinnerComponent from "../../components/loadingSpinner.component.tsx";
import ButtonComponent from "../../components/button.component.tsx";


const Wrapper = styled.form`
    max-width: 500px;
    margin: 20px auto;
    
    button {
        margin-left: auto;
    }
`

const StyledTextarea = styled(Textarea)`
    color: #000;
    background: #e5e4e7;
`

const AddingCommentContainer = () => {

    const [commentText, setCommentText] = useState<string>('');
    const [createComment, { loading, error }] = useMutation(CREATE_COMMENT, {
        refetchQueries: ['GetComments']
    });

    if(loading) {
        return <LoadingSpinnerComponent />
    }

    const handleSubmit = async () => {
        await createComment({
            variables: { text: commentText },
        });
        setCommentText('');
    };

    return (
        <Wrapper onSubmit={handleSubmit}>
            <Field.Root>
            <StyledTextarea
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                placeholder="Add comment here..."
                resize="none"
                colorPalette="teal"
            />
            <Field.HelperText>Max 100 characters.</Field.HelperText>
                <ButtonComponent
                    isTooltip={commentText.length === 0}
                    disabled={commentText.length === 0}
                    tooltipContent="You cannot add empty comment!"
                    buttonText="Add"
                />
            </Field.Root>
            {error && <p>Error: {error.message}</p>}
        </Wrapper>
    )
}

export default AddingCommentContainer;
