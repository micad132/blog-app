import styled from "styled-components";
import { useState } from "react";
import DialogComponent from "../../components/dialog.component.tsx";
import InputComponent from "../../components/input.component.tsx";
import { useAuthStore } from "../../store/authStore.ts";
import UserDataComponent from "./userData.component.tsx";
import UserRoleComponent from "./userRole.component.tsx";
import { PasswordInput } from "../../components/ui/password-input.tsx";
import { useMutation } from "@apollo/client/react";
import { REMOVE_USER, UPDATE_USER } from "../../graphql/queries/user.queries.ts";
import { toaster } from "../../components/ui/toaster.tsx";
import { useNavigate } from "react-router";
import type { UserUpdateDTO, UserUpdateValues } from "../../types/userTypes.ts";


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


    const { user, setUserData } = useAuthStore()

    const [userUpdateValues, setUserUpdateValues] = useState<UserUpdateValues>({
        username: user.username,
        city: user.city,
        country: user.country,
    });

    const [deleteUser ] = useMutation(REMOVE_USER);
    const [updateUser] = useMutation(UPDATE_USER);


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

    const updateUserHandler = async () => {
        const dataToUpdate: UserUpdateDTO = {
            id: user.id,
            ...userUpdateValues,
        }
        try {
            const result = await updateUser({ variables: { input: dataToUpdate } });
            const updatedUser = result.data?.updateUser;
            if(updatedUser) {
                setUserData(updatedUser);
            }
            toaster.create({
                title: "Success",
                description: `You successfully updated your account data`,
                closable: true,
                type: 'success',
            })
        } catch (e) {
            console.error(e);
        }
    }

    const updateUserDataHandler = (key: keyof UserUpdateValues, value: string) => {
        setUserUpdateValues((prevState) => ({
            ...prevState,
            [key]: value,
        }))
    }


    const updateUserDialogBody = (
        <DialogBodyWrapper>
            <InputComponent<string>
                label="Username"
                value={userUpdateValues.username}
                placeholder={user.username}
                onChange={(value) => updateUserDataHandler('username', value)}
                isRequired={false}
            />
            <InputComponent
                label="City"
                value={userUpdateValues.city}
                placeholder={user.city}
                onChange={(value) => updateUserDataHandler('city', value)}
                isRequired={false}
            />
            <InputComponent
                label="Country"
                value={userUpdateValues.country}
                placeholder={user.country}
                onChange={(value) => updateUserDataHandler('country', value)}
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
                actionButtonAction={updateUserHandler}
                dialogOpenButtonText="Edit profile"
                dialogTitle="Edit profile"
                dialogBody={updateUserDialogBody}
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
