import { Button, Table } from "@chakra-ui/react"
import type { UserResponseDTO } from "../../types/userTypes.ts";
import styled from "styled-components";
import RoleBadgeComponent from "../../components/roleBadge.component.tsx";
import { useAuthStore } from "../../store/authStore.ts";
import { UserRole } from "../../types/authTypes.ts";
import { useMutation } from "@apollo/client/react";
import { REMOVE_USER } from "../../graphql/queries/user.queries.ts";
import { toaster } from "../../components/ui/toaster.tsx";


const TableWrapper = styled.div`
    max-width: 1200px;
    margin: 20px auto;
`


const TableRow = styled(Table.Row)`
`

const TableCell = styled(Table.Cell)`
`

interface Props {
    users: UserResponseDTO[]
}

const UsersTableComponent = ({ users }: Props) => {


    const { user } = useAuthStore();
    const isAdmin = user.role === UserRole.ADMIN;

    const [deleteUserById, { loading }] = useMutation(REMOVE_USER, {
        refetchQueries: ["GetAllUsers"]
    });

    const onDeleteUserHandler = async (userId: number) => {
        try {
            console.log('user id', userId);
            await deleteUserById({ variables: { userId  } });
            toaster.create({
                title: "Success",
                description: `You successfully deleted user with id: ${userId}`,
                closable: true,
                type: 'success',
            })
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <TableWrapper>
        <Table.Root
            size="sm"
            striped
        >
            <Table.Header>
                <Table.Row>
                    <Table.ColumnHeader>Id:</Table.ColumnHeader>
                    <Table.ColumnHeader>Username:</Table.ColumnHeader>
                    <Table.ColumnHeader>City:</Table.ColumnHeader>
                    <Table.ColumnHeader>Country:</Table.ColumnHeader>
                    <Table.ColumnHeader>Role:</Table.ColumnHeader>
                    {isAdmin && <Table.ColumnHeader>Action:</Table.ColumnHeader>}
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {users.map((user) => (
                    <TableRow key={user.id}>
                        <TableCell>{user.id}</TableCell>
                        <TableCell>{user.username}</TableCell>
                        <TableCell>{user.city}</TableCell>
                        <TableCell>{user.country}</TableCell>
                        <TableCell><RoleBadgeComponent role={user.role} /></TableCell>
                        {isAdmin && <TableCell>
                            <Button
                                variant="solid"
                                colorPalette="red"
                                size="xs"
                                onClick={() => onDeleteUserHandler(user.id)}
                            >
                                Delete
                            </Button>
                        </TableCell>}
                    </TableRow>
                ))}
            </Table.Body>
        </Table.Root>
        </TableWrapper>
    )
}

export default UsersTableComponent;
