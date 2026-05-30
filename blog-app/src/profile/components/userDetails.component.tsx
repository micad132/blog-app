import { Button } from "@chakra-ui/react";
import styled from "styled-components";
import EditProfileDialogComponent from "./editProfileDialog.component.tsx";
import { useState } from "react";


const Wrapper = styled.div`
    background: teal;
    border-radius: 10px;
    width: 700px;
    height: 600px;
`
const Header = styled.h5`
    font-weight: bold;
    color: #fff;
    padding-top: 10px;
`


const UserDetailsComponent = () => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <Wrapper>
            <Header>User details:</Header>
            jdjsjdjs




            <EditProfileDialogComponent
                open={open}
                setOpen={setOpen}
            />
        </Wrapper>
    )
}

export default UserDetailsComponent;
