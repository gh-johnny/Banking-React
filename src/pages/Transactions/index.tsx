import { useEffect, useState } from "react";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";

interface ITransaction {
    id: number,
    description: string,
    type: boolean, // 'entry' | 'exit',
    price: number,
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
            console.log(data.map(item => {
                if (item.category === 'withdrawal') {
                    return {
                        ...item,
                        type: false,
                    }
                } else {
                    return { ...item, type: true }
                }
            }))
        } catch (err) {
            console.error('could not fetch data from mockapi.io: ' + err)
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
                        {
                            transactions.map(item =>
                                <tr key={item.id}>
                                    <td>{item.description}</td>
                                    <td><PriceHighlight variant={item.category === 'withdrawal' || item.category === 'deposit' ? 'exit' : 'entry'}>$ {item.price}</PriceHighlight></td>
                                    <td>{item.category}</td>
                                    <td>{item.createdAt}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        </>
    )
}

