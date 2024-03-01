import { useEffect, useState } from "react";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {
    const [transactions, setTransactions] = useState<ITransaction[]>([])

    async function fetchTransactions() {
        try {
            const res = await fetch('https://65e22337a8583365b317f334.mockapi.io/transactions')
            const data = await res.json() as ITransaction[]
            setTransactions(data)
        } catch (err) {
            console.error('Could not fetch data from mockapi.io: ' + err)
            // Hardcoded data if fetch fails just to make sure some data will be shown
            setTransactions([
                { description: "Shoes", type: false, price: "734.00", category: "withdrawal", createdAt: "2023-12-08T12:05:41.577Z", id: "1" },
                { description: "Bacon", type: true, price: "14.00", category: "invoice", createdAt: "2023-04-24T21:52:12.633Z", id: "2" }
            ])
        }
    }

    useEffect(() => {
        fetchTransactions()
    }, [])

    return (
        <>
            <Summary />
            <TransactionsContainer>
                <SearchForm />
                <TransactionsTable>
                    <tbody>
                        {transactions.length !== 0 &&
                            transactions.slice(0, 7).map(item => { // Just trimming some data, not all is needed to be shown for the example
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

