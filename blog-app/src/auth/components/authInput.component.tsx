import { Field, HStack, Input, InputGroup } from "@chakra-ui/react"
import type { ReactNode } from "react";
import { PasswordInput } from "../../components/ui/password-input.tsx";

interface Props {
    icon: ReactNode,
    placeholder: string,
    value: string,
    onChange: (username: string) => void,
    label: string,
    isPassword: boolean,
}

const AuthInput = ({ icon, placeholder, value, onChange, label, isPassword }: Props) => {

    const properInput = () => {
        if(isPassword) {
            return (
                <PasswordInput
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                />
            )
        }
        return (
            <Input
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        )
    }


    return (
    <HStack gap="10"
width="full">
        <Field.Root required>
            <Field.Label>
                {label} <Field.RequiredIndicator />
            </Field.Label>
            <InputGroup startElement={icon}>
                {properInput()}
            </InputGroup>
        </Field.Root>
    </HStack>
    )
}

export default AuthInput;
