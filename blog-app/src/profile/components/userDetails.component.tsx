import styled from "styled-components";
import { useState } from "react";
import DialogComponent from "../../components/dialog.component.tsx";
import InputComponent from "../../components/input.component.tsx";
import { useAuthStore } from "../../store/authStore.ts";
import UserDataComponent from "./userData.component.tsx";
import UserRoleComponent from "./userRole.component.tsx";


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

const DetailsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    color: #fff;
    background: #16171d;
    width: 70%;
    margin: 20px auto;
    border-radius: 5px;
    padding: 10px 0;
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
                label={"Country"}
                value={undefined}
                placeholder={user.country}
                onChange={() => {}}
                isRequired={false}
            />
        </DialogBodyWrapper>
    )

    return (
        <Wrapper>
            <Header>User details:</Header>
            <DetailsWrapper>
                <UserDataComponent
                    title={'Username:'}
                    data={user.username}
                />
                <UserDataComponent
                    title={'City:'}
                    data={user.city}
                />
                <UserDataComponent
                    title={'Country:'}
                    data={user.country}
                />
                <UserRoleComponent
                    data={user.role}
                />
            </DetailsWrapper>
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
