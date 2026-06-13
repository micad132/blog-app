import { useQuery } from "@apollo/client/react";
import { GET_ALL_USERS } from "../graphql/queries/user.queries.ts";
import type { UsersFetchResponse } from "../types/userTypes.ts";
import UsersTableComponent from "./components/usersTable.component.tsx";

const UsersPageContainer = () => {

    const { data } = useQuery<UsersFetchResponse>(GET_ALL_USERS)

    console.log(data);

    return (
        <div>
            <h2>Users using blog: ({data?.users.length})</h2>
            <UsersTableComponent users={data?.users || []} />
        </div>
    )
}

export default UsersPageContainer;
