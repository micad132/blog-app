import { Table } from "@chakra-ui/react"

const UsersTableComponent = () => {

    return (
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
               hs
            </Table.Body>
        </Table.Root>
    )
}

export default UsersTableComponent;
