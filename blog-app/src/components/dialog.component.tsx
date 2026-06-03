import { Button, CloseButton, Dialog, Portal } from "@chakra-ui/react";
import type { ReactNode } from "react";
import styled from "styled-components";

const DialogTitle = styled(Dialog.Title)`
    color: #000;
`

interface Props {
    open: boolean,
    setOpen: (open: boolean) => void,
    dialogOpenButtonText: string,
    actionButtonAction: () => void,
    dialogTitle: string,
    dialogBody: ReactNode,
    actionButtonText: string,
    dialogOpenButtonColor?: string,
}

const DialogComponent = ({ open, setOpen,
                             actionButtonAction, dialogOpenButtonText, dialogTitle, dialogBody, actionButtonText, dialogOpenButtonColor = 'white' }: Props) => {

    return (
        <Dialog.Root
            lazyMount
            open={open}
            onOpenChange={(e) => setOpen(e.open)}
        >
            <Dialog.Trigger asChild>
                <Button
                    colorPalette={dialogOpenButtonColor}
                    variant="solid"
                >
                    {dialogOpenButtonText}
                </Button>
            </Dialog.Trigger>
            <Portal>
                <Dialog.Backdrop />
                <Dialog.Positioner>
                    <Dialog.Content>
                        <Dialog.Header>
                            <DialogTitle>{dialogTitle}</DialogTitle>
                        </Dialog.Header>
                        <Dialog.Body>
                            {dialogBody}
                        </Dialog.Body>
                        <Dialog.Footer>
                            <Dialog.ActionTrigger asChild>
                                <Button variant="outline">Cancel</Button>
                            </Dialog.ActionTrigger>
                            <Button
                                colorPalette="teal"
                                onClick={actionButtonAction}
                            >
                                {actionButtonText}
                            </Button>
                        </Dialog.Footer>
                        <Dialog.CloseTrigger asChild>
                            <CloseButton  />
                        </Dialog.CloseTrigger>
                    </Dialog.Content>
                </Dialog.Positioner>
            </Portal>
        </Dialog.Root>
    )
}

export default DialogComponent;
