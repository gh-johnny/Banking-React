import { Summary } from "../../components/Summary";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {
    return (
        <>
            <Summary />
            <TransactionsContainer>
                <TransactionsTable>
                    <tbody>
                        <tr>
                            <td>Web development</td>
                            <td><PriceHighlight variant="entry">$ 12.000.00</PriceHighlight></td>
                            <td>Tenants</td>
                            <td>13/05/2024</td>
                        </tr>
                        <tr>
                            <td>Monthly fees</td>
                            <td><PriceHighlight variant="exit">- $ 3.000.00</PriceHighlight></td>
                            <td>Rent</td>
                            <td>02/02/2024</td>
                        </tr>
                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        </>
    )
}
