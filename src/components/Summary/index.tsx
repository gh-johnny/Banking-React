import { SummaryContainer, SummaryCard } from "./styles";
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { priceFormatter } from "../../utils/currencyFormatter";
import { useSummary } from "../../hooks/useSummary";

export function Summary() {
    const summary = useSummary()

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

                <strong>$ {priceFormatter.format(Number(summary.entry.toFixed(2))).replace('$', '')}</strong>
            </SummaryCard>
            <SummaryCard>
                <header>
                    <span>Exits</span>
                    <ArrowCircleDown
                        size={32}
                        color="#f75a68"
                    />
                </header>

                <strong>$ {priceFormatter.format(Number(summary.exit.toFixed(2))).replace('$', '')}</strong>
            </SummaryCard>
            <SummaryCard variant="green" >
                <header>
                    <span>Total</span>
                    <CurrencyDollar
                        size={32}
                        color="#fff"
                    />
                </header>

                <strong>$ {priceFormatter.format(Number(summary.total.toFixed(2))).replace('$', '')}</strong>
            </SummaryCard>
        </SummaryContainer>
    )
} 
