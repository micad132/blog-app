import { Field, HStack, Input, InputGroup } from "@chakra-ui/react"
import type { ReactNode } from "react";

interface Props {
    icon: ReactNode,
    placeholder: string,
    value: string,
    onChange: (username: string) => void,
    label: string,
}

const AuthInput = ({ icon, placeholder, value, onChange, label }: Props) => {
    return (
    <HStack gap="10" width="full">
        <Field.Root required>
            <Field.Label>
                {label} <Field.RequiredIndicator />
            </Field.Label>
            <InputGroup startElement={icon}>
                <Input
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                />
            </InputGroup>
        </Field.Root>
    </HStack>
    )
}

export default AuthInput;
