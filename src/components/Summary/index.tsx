import { SummaryContainer, SummaryCard } from "./styles";
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'

export function Summary() {
    return (
        <SummaryContainer>
            <SummaryCard>
                <header>
                    <span>Entries</span>
                    <ArrowCircleUp
                        size={32}
                        color="#00b37e"
                    />
                </header>

                <strong>$ 15.400.00</strong>
            </SummaryCard>
            <SummaryCard>
                <header>
                    <span>Exits</span>
                    <ArrowCircleDown
                        size={32}
                        color="#f75a68"
                    />
                </header>

                <strong>$ 2.699.00</strong>
            </SummaryCard>
            <SummaryCard variant="green" >
                <header>
                    <span>Total</span>
                    <CurrencyDollar
                        size={32}
                        color="#fff"
                    />
                </header>

                <strong>$ 12.701.00</strong>
            </SummaryCard>
        </SummaryContainer>
    )
} 
