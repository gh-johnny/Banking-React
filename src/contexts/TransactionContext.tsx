import { useState, useEffect, ReactNode, createContext } from "react";

interface ITransaction {
    id: string,
    description: string,
    type: "entry" | "exit",
    price: string,
    category: string,
    createdAt: string,
}

interface ITransactionContext {
    transactions: ITransaction[]
}

export const TransactionsContext = createContext({} as ITransactionContext)

const defaultCouldNotFetchData = [
    { description: "Shoes", type: "entry", price: "734.00", category: "withdrawal", createdAt: "2023-12-08T12:05:41.577Z", id: "1" },
    { description: "Bacon", type: "exit", price: "14.00", category: "invoice", createdAt: "2023-04-24T21:52:12.633Z", id: "2" }
] as ITransaction[]

export function TransactionsProvider({ children }: { children: ReactNode }) {
    const [transactions, setTransactions] = useState<ITransaction[]>([])

    async function fetchTransactions() {
        try {
            const res = await fetch('https://65e22337a8583365b317f334.mockapi.io/transactions')
            const data = await res.json() as ITransaction[]
            // setTransactions(data.slice(0, 7)) // Just trimming some data, not all is needed to be shown for the example
            setTransactions(data)
        } catch (err) {
            console.error('Could not fetch data from mockapi.io: ' + err)
            // Hardcoded data if fetch fails just to make sure some data will be shown
            setTransactions(defaultCouldNotFetchData)
        }
    }

    useEffect(() => {
        fetchTransactions()
    }, [])

    return (
        <TransactionsContext.Provider value={{ transactions }}>
            {children}
        </TransactionsContext.Provider>
    )
}
