import { Table } from "@chakra-ui/react"
import type { UserResponseDTO } from "../../types/userTypes.ts";
import styled from "styled-components";


const TableWrapper = styled.div`
    max-width: 1200px;
    margin: 20px auto;
`

interface Props {
    users: UserResponseDTO[]
}

const UsersTableComponent = ({ users }: Props) => {

    return (
        <TableWrapper>
        <Table.Root size="sm">
            <Table.Header>
                <Table.Row>
                    <Table.ColumnHeader>Id:</Table.ColumnHeader>
                    <Table.ColumnHeader>Username:</Table.ColumnHeader>
                    <Table.ColumnHeader>City:</Table.ColumnHeader>
                    <Table.ColumnHeader>Country:</Table.ColumnHeader>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {users.map((user) => (
                    <Table.Row key={user.id}>
                        <Table.Cell>{user.id}</Table.Cell>
                        <Table.Cell>{user.username}</Table.Cell>
                        <Table.Cell>{user.city}</Table.Cell>
                        <Table.Cell>{user.country}</Table.Cell>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table.Root>
        </TableWrapper>
    )
}

export default UsersTableComponent;
