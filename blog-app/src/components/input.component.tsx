import { Field, Input } from "@chakra-ui/react"

interface Props<T> {
    label: string,
    value: T,
    placeholder: string,
    onChange: (value: T) => void,
    isRequired: boolean,
}

const InputComponent =   <T,>({ label, value, placeholder, onChange, isRequired }: Props<T>) => {
    return (
            <Field.Root required={isRequired}>
                <Field.Label>
                    {label} {isRequired && <Field.RequiredIndicator/>}
                </Field.Label>
                <Input
                    placeholder={placeholder}
                    value={value as string}
                    onChange={(e) => onChange(e.target.value as T)}
                />
        </Field.Root>
    )
}

export default InputComponent;
