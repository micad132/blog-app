import { Button } from "@chakra-ui/react";
import { Tooltip } from "./ui/tooltip.tsx";

interface Props {
    isTooltip: boolean,
    colorPalette?: string,
    disabled: boolean,
    buttonText: string,
    tooltipContent?: string,
}

const ButtonComponent = ({ isTooltip, buttonText, disabled, colorPalette = 'teal',
                             tooltipContent }: Props) => {


    if(isTooltip) {
        return (
            <Tooltip content={tooltipContent}>
                <Button
                    colorPalette={colorPalette}
                    variant='solid'
                    type='submit'
                    disabled={disabled}
                >
                    {buttonText}
                </Button>
            </Tooltip>
        )
    }
    return (
        <Button
            colorPalette={colorPalette}
            variant='solid'
            type='submit'
            disabled={disabled}
        >
            {buttonText}
        </Button>
    )
}

export default ButtonComponent;
