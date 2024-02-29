import { HeaderContainer, HeaderContent, LogoContainer, NewTransactionButton } from "./styles";

import logoImg from '../../assets/logo/logo-johnny.svg'

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

                <NewTransactionButton
                    type="button"
                >
                    New transaction
                </NewTransactionButton>
            </HeaderContent>
        </HeaderContainer>
    )
}
