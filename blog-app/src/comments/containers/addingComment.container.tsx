import { Button, Field, Textarea } from "@chakra-ui/react"
import { useState } from "react";
import styled from "styled-components";


const Wrapper = styled.form`
    max-width: 500px;
    margin: 20px auto;
    
    button {
        margin-left: auto;
    }
`

const AddingCommentContainer = () => {

    const [commentText, setCommentText] = useState<string>('');
    return (
        <Wrapper>
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
                variant="solid">
                Add
            </Button>
            </Field.Root>
        </Wrapper>
    )
}

export default AddingCommentContainer;
