import styled from "styled-components";
import { useState } from "react";
import DialogComponent from "../../components/dialog.component.tsx";
import InputComponent from "../../components/input.component.tsx";
import { useAuthStore } from "../../store/authStore.ts";
import UserDataComponent from "./userData.component.tsx";
import UserRoleComponent from "./userRole.component.tsx";
import { PasswordInput } from "../../components/ui/password-input.tsx";
import { useMutation } from "@apollo/client/react";
import { REMOVE_USER } from "../../graphql/queries/user.queries.ts";
import { toaster } from "../../components/ui/toaster.tsx";
import { useNavigate } from "react-router";


const Wrapper = styled.div`
    background: teal;
    border-radius: 10px;
    width: 700px;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
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
    const [changePasswordDialogOpen, setChangePasswordDialogOpen] = useState<boolean>(false);
    const [deleteAccountDialogOpen, setDeleteAccountDialogOpen] = useState<boolean>(false);
    const [deleteUser ] = useMutation(REMOVE_USER);
    const { user } = useAuthStore()
    const navigate = useNavigate();

    const onDeleteHandler = async () => {
        try {
            await deleteUser({
                variables: { id: user.id, },
            });
            toaster.create({
                title: "Success",
                description: `You successfully deleted your account! Now you will get navigated to login page`,
                closable: true,
                type: 'success',
            })
            setTimeout(() => {
                navigate('/login')
            }, 1500);
        } catch (e) {
            console.error(e);
        }
    }


    const dialogBody = (
        <DialogBodyWrapper>
            <InputComponent
                label="Username"
                value={undefined}
                placeholder={user.username}
                onChange={() => {}}
                isRequired={false}
            />
            <InputComponent
                label="City"
                value={undefined}
                placeholder={user.city}
                onChange={() => {}}
                isRequired={false}
            />
            <InputComponent
                label="Country"
                value={undefined}
                placeholder={user.country}
                onChange={() => {}}
                isRequired={false}
            />
        </DialogBodyWrapper>
    )

    const changePasswordDialogBody = (
        <DialogBodyWrapper>
            <PasswordInput
                value={undefined}
                placeholder="Type new password here..."
                onChange={() => {}}
            />
            <PasswordInput
                value={undefined}
                placeholder="Confirm new password"
                onChange={() => {}}
            />
        </DialogBodyWrapper>
    )

    const deleteAccountDialogBody = (
        <DialogBodyWrapper>
            <p>Are you sure you want to delete your account?</p>
        </DialogBodyWrapper>
    )

    return (
        <Wrapper>
            <Header>User details:</Header>
            <DetailsWrapper>
                <UserDataComponent
                    title="Username:"
                    data={user.username}
                />
                <UserDataComponent
                    title="City:"
                    data={user.city}
                />
                <UserDataComponent
                    title="Country:"
                    data={user.country}
                />
                <UserRoleComponent
                    data={user.role}
                />
            </DetailsWrapper>
            <DialogComponent
                open={changePasswordDialogOpen}
                setOpen={setChangePasswordDialogOpen}
                actionButtonText="Change"
                actionButtonAction={() => {}}
                dialogOpenButtonText="Change password"
                dialogTitle="Change password"
                dialogBody={changePasswordDialogBody}
            />
            <DialogComponent
                open={open}
                setOpen={setOpen}
                actionButtonText="Edit"
                actionButtonAction={() => {}}
                dialogOpenButtonText="Edit profile"
                dialogTitle="Edit profile"
                dialogBody={dialogBody}
            />
            <DialogComponent
                open={deleteAccountDialogOpen}
                setOpen={setDeleteAccountDialogOpen}
                actionButtonText="Delete"
                actionButtonAction={onDeleteHandler}
                dialogOpenButtonText="Delete account"
                dialogTitle="Delete account"
                dialogBody={deleteAccountDialogBody}
                dialogOpenButtonColor="red"
            />
        </Wrapper>
    )
}

export default UserDetailsComponent;
