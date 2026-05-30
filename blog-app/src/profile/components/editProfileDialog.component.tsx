import { Button, Dialog, Portal, CloseButton  } from "@chakra-ui/react";
import styled from "styled-components";

const DialogTitle = styled(Dialog.Title)`
    color: #000;
`

interface Props {
    open: boolean,
    setOpen: (open: boolean) => void,
}

const EditProfileDialogComponent = ({ open, setOpen }: Props) => {

    return (
        <Dialog.Root
            lazyMount
            open={open}
            onOpenChange={(e) => setOpen(e.open)}
        >
            <Dialog.Trigger asChild>
                <Button
                    colorPalette="white"
                    variant="solid"

                >
                    Edit profile
                </Button>
            </Dialog.Trigger>
            <Portal>
                <Dialog.Backdrop />
                <Dialog.Positioner>
                    <Dialog.Content>
                        <Dialog.Header>
                            <DialogTitle>Dialog Title</DialogTitle>
                        </Dialog.Header>
                        <Dialog.Body>
                            COSIK
                        </Dialog.Body>
                        <Dialog.Footer>
                            <Dialog.ActionTrigger asChild>
                                <Button variant="outline">Cancel</Button>
                            </Dialog.ActionTrigger>
                            <Button>Edit</Button>
                        </Dialog.Footer>
                        <Dialog.CloseTrigger asChild>
                            <CloseButton />
                        </Dialog.CloseTrigger>
                    </Dialog.Content>
                </Dialog.Positioner>
            </Portal>
        </Dialog.Root>
    )
}

export default EditProfileDialogComponent;
