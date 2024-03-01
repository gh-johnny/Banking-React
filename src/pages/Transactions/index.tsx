import { useEffect, useState } from "react";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";

interface ITransaction {
    id: string,
    description: string,
    type: boolean, // 'entry' | 'exit',
    price: string,
    category: string,
    createdAt: string,
}

export function Transactions() {
    const [transactions, setTransactions] = useState<ITransaction[]>([])

    async function fetchTransactions() {
        try {
            const res = await fetch('https://65e22337a8583365b317f334.mockapi.io/transactions')
            const data = await res.json() as ITransaction[]
            setTransactions(data.map(item => {
                if (item.category !== 'withdrawal') {
                    return {
                        ...item,
                        type: false,
                    }
                } else {
                    return { ...item }

                }
            }))
        } catch (err) {
            console.error('could not fetch data from mockapi.io: ' + err)
            // hardcoded data if fetch fails just to make sure there already is data in there
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
                            transactions.slice(0, 10).map(item => { // Just trimming some data, not all is needed to be shown for the example
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

