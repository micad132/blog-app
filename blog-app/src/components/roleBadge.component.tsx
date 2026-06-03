import { Badge } from "@chakra-ui/react";
import { UserRole } from "../types/authTypes.ts";

interface Props {
    role: UserRole,
}


const getProperRoleColor = (role: UserRole) => {
    if(role === UserRole.USER) return 'teal';
    if(role === UserRole.ADMIN) return 'purple';
}

const RoleBadgeComponent = ({ role }: Props) => {
        return (
            <Badge
                variant="solid"
                colorPalette={getProperRoleColor(role)}
            >
                {role}
            </Badge>
        )
}

export default RoleBadgeComponent;
