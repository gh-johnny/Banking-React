import styled from "styled-components";

export const HeaderContainer = styled.header`
    background: ${props => props.theme["gray-900"]};
    padding: 2.5rem 0 7.5rem;
`

export const HeaderContent = styled.div`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 1.5rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    span {
        position: absolute;
        bottom: 0;
        font-size: 1.5rem;
        color: ${props => props.theme["green-700"]}
    }
`

export const NewTransactionButton = styled.button`
    height: 50px;
    border: 0;
    background: ${props => props.theme["green-500"]};
    color: ${props => props.theme.white};
    padding: 0 1.25rem;
    border-radius: 6px;
    cursor: pointer;

    &:hover {
        background: ${props => props.theme["green-700"]};
        transition: background-color 0.2s;
    }
`
