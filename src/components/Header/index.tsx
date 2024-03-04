import { HeaderContainer, HeaderContent, LogoContainer, NewTransactionButton } from "./styles";

import logoImg from '../../assets/logo/logo-johnny.svg'
import * as Dialog from "@radix-ui/react-dialog";
import { NewTransactionModal } from "../NewTransactionModal";
import { useState } from "react";

export function Header() {
    const [open, setOpen] = useState(false)

    const toSetModalOpen = (shouldCloseModal: boolean) => {
        setOpen(shouldCloseModal)
    }

    return (
        <HeaderContainer>
            <HeaderContent>
                <LogoContainer>
                    <img
                        src={logoImg}
                        width={130}
                        height={130}
                        alt="" // Screen reader will not read when alt tag is empty
                    />
                    <span>Banking</span>
                </LogoContainer>

                <Dialog.Root open={open} onOpenChange={setOpen}>
                    <Dialog.Trigger asChild>
                        <NewTransactionButton tabIndex={4} type="button">New transaction</NewTransactionButton>
                    </Dialog.Trigger>

                    <NewTransactionModal toSetModalOpen={toSetModalOpen} />

                </Dialog.Root>

            </HeaderContent>
        </HeaderContainer>
    )
}
