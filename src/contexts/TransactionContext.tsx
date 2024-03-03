import { useState, useEffect, ReactNode, createContext } from "react";
import { axiosInstance } from "../libs/axios/axios";

interface ITransaction {
    id: string,
    description: string,
    type: "entry" | "exit",
    price: string,
    category: string,
    createdAt: string,
}

interface ITransactionContext {
    transactions: ITransaction[],
    setTransactions: React.Dispatch<React.SetStateAction<ITransaction[]>>,
    originalData: ITransaction[],
}

export const TransactionsContext = createContext({} as ITransactionContext)

const defaultCouldNotFetchData = [
    { description: "Shoes", type: "entry", price: "734.00", category: "withdrawal", createdAt: "2023-12-08T12:05:41.577Z", id: "1" },
    { description: "Bacon", type: "exit", price: "14.00", category: "invoice", createdAt: "2023-04-24T21:52:12.633Z", id: "2" }
] as ITransaction[]

let originalData: ITransaction[]
export function TransactionsProvider({ children }: { children: ReactNode }) {
    const [transactions, setTransactions] = useState<ITransaction[]>([])

    useEffect(() => {
        async function fetchTransactions() {
            try {
                const { data } = await axiosInstance.get(`/transactions`) as { data: ITransaction[] }
                // setTransactions(data.slice(0, 7)) // Just trimming some data, not all is needed to be shown for the example
                setTransactions(data)
                originalData = data
            }
            catch (err) {
                console.error('Could not fetch data from mockapi.io: ' + err)
                // Hardcoded data if fetch fails just to make sure some data will be shown
                setTransactions(defaultCouldNotFetchData)
                originalData = defaultCouldNotFetchData
            }
        }

        fetchTransactions()
    }, [])

    return originalData && (
        <TransactionsContext.Provider value={{
            originalData,
            transactions,
            setTransactions,
        }}>
            {children}
        </TransactionsContext.Provider>
    )
}
