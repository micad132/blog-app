import styled from "styled-components";
import type { UserRole } from "../../types/authTypes.ts";
import RoleBadgeComponent from "../../components/roleBadge.component.tsx";

const Wrapper = styled.div`
    display: flex;
    gap: 5px;
`

const TitleSpan = styled.span`
    font-weight: bold;
`

interface Props {
    data: UserRole,
}

const UserRoleComponent = ({ data }: Props) => {

    return (
        <Wrapper>
            <TitleSpan>Role:</TitleSpan>
            <RoleBadgeComponent role={data} />
        </Wrapper>
    )
}

export default UserRoleComponent;
