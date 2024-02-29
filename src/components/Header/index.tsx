import { HeaderContainer, HeaderContent, LogoContainer, NewTransactionButton } from "./styles";

import logoImg from '../../assets/logo/logo-johnny.svg'
import * as Dialog from "@radix-ui/react-dialog";
import { NewTransactionModal } from "../NewTransactionModal";

export function Header() {
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

                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <NewTransactionButton type="button">New transaction</NewTransactionButton>
                    </Dialog.Trigger>

                    <NewTransactionModal />

                </Dialog.Root>

            </HeaderContent>
        </HeaderContainer>
    )
}
