import styled from "styled-components";
import { useState } from "react";
import DialogComponent from "../../components/dialog.component.tsx";
import InputComponent from "../../components/input.component.tsx";
import { useAuthStore } from "../../store/authStore.ts";


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

const DialogBodyWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`


const UserDetailsComponent = () => {
    const [open, setOpen] = useState<boolean>(false);
    const { user } = useAuthStore()


    const dialogBody = (
        <DialogBodyWrapper>
            <InputComponent
                label={"Username"}
                value={undefined}
                placeholder={user.username}
                onChange={() => {}}
                isRequired={false}
            />
            <InputComponent
                label={"City"}
                value={undefined}
                placeholder={user.city}
                onChange={() => {}}
                isRequired={false}
            />
            <InputComponent
                label={"Password"}
                value={undefined}
                placeholder={""}
                onChange={() => {}}
                isRequired={false}
            />
        </DialogBodyWrapper>
    )

    return (
        <Wrapper>
            <Header>User details:</Header>
            jdjsjdjs
            <DialogComponent
                open={open}
                setOpen={setOpen}
                actionButtonText={'Edit'}
                actionButtonAction={() => {}}
                dialogOpenButtonText={'Edit profile'}
                dialogTitle={'Edit profile'}
                dialogBody={dialogBody}
            />
        </Wrapper>
    )
}

export default UserDetailsComponent;
