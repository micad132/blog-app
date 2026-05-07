import { Button } from "@chakra-ui/react";
import axios from "axios";
import { API_PATH } from "../utils/consts.ts";

const CommentContainer = () => {


    const testRequest = async () => {
        const res = await axios.get(`${API_PATH}/auth/profile`);
    }

    return (
        <div>
            KOMENTARZE
            <Button onClick={testRequest}>TEST</Button>
        </div>
    )
}

export default CommentContainer;
