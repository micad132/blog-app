import { Button, Field, Textarea } from "@chakra-ui/react"
import { useState } from "react";
import styled from "styled-components";
import { useMutation } from "@apollo/client/react";
import { CREATE_COMMENT } from "../../graphql/queries/comments.queries.ts";
import LoadingSpinnerComponent from "../../components/loadingSpinner.component.tsx";


const Wrapper = styled.form`
    max-width: 500px;
    margin: 20px auto;
    
    button {
        margin-left: auto;
    }
`

const AddingCommentContainer = () => {

    const [commentText, setCommentText] = useState<string>('');
    const [createComment, { loading, error }] = useMutation(CREATE_COMMENT);

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
            <Textarea
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                placeholder={'Add comment here...'}
                resize={'none'}
            />
            <Field.HelperText>Max 100 characters.</Field.HelperText>
            <Button
                colorPalette="teal"
                variant="solid"
                type='submit'
            >
                Add
            </Button>
            </Field.Root>
            {error && <p>Error: {error.message}</p>}
        </Wrapper>
    )
}

export default AddingCommentContainer;
