import styled from "styled-components";

export const TransactionsContainer = styled.main`
    width: 100%;
    max-width: 1120px;
    margin: 4rem auto 0;
    padding: 0 1.5rem;
    max-height: 40rem;
    padding-top: .15rem;
    overflow-y: auto;
    overflow-x: hidden;
`

export const TransactionsTable = styled.table`
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 0.5rem;
    margin-top: 1.5rem;

    td {
        padding: 1.25rem 2rem;
        background: ${props => props.theme["gray-700"]};

        &:first-child {
            width: 45%;
            border-top-left-radius: 6px;
            border-bottom-left-radius: 6px;
        }

        &:last-child {
            border-top-right-radius: 6px;
            border-bottom-right-radius: 6px;

            & > div {
                width: 1.9rem;
                height: 1.9rem;

                display: flex;
                align-items: center;
                justify-content: center;

                border-radius: 6px;
            }

            & > div:hover  {
                background: ${props => props.theme["gray-600"]}; 
                cursor: pointer;
            }

            svg {
                color: ${props => props.theme["red-500"]};
            }
        }
    }

`

interface IPriceHighlightProps {
    variant: 'entry' | 'exit'
}

export const PriceHighlight = styled.span<IPriceHighlightProps>`
    color: ${props => props.variant === 'entry' ? props.theme["green-300"] : props.theme["red-300"]};
`
