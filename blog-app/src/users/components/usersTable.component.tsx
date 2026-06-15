import { Button, Table } from "@chakra-ui/react"
import type { UserResponseDTO } from "../../types/userTypes.ts";
import styled from "styled-components";
import RoleBadgeComponent from "../../components/roleBadge.component.tsx";


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
                    <Table.ColumnHeader>Action:</Table.ColumnHeader>
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
                        <TableCell>

                            <Button
                                variant="solid"
                                colorPalette="red"
                                size="xs"
                            >
                                Delete
                            </Button>
                        </TableCell>
                    </TableRow>
                ))}
            </Table.Body>
        </Table.Root>
        </TableWrapper>
    )
}

export default UsersTableComponent;
