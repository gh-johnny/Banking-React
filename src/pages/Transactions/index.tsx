import { useContext } from "react";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";
import { TransactionsContext } from "../../contexts/TransactionContext";

export function Transactions() {
    const { transactions } = useContext(TransactionsContext)

    return (
        <>
            <Summary />
            <TransactionsContainer>
                <SearchForm />
                <TransactionsTable>
                    <tbody>
                        {transactions.length !== 0 &&
                            transactions.map(item => {
                                return <tr key={item.id}>
                                    <td>{item.description}</td>
                                    <td><PriceHighlight variant={item.category === 'withdrawal' || item.category === 'deposit' ? 'exit' : 'entry'}>$ {item.price}</PriceHighlight></td>
                                    <td>{item.category}</td>
                                    <td>{item.createdAt}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        </>
    )
}

