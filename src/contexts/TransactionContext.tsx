import { ReactNode, createContext } from "react";


interface ITransaction {
    id: string,
    description: string,
    type: boolean, // 'entry' | 'exit',
    price: string,
    category: string,
    createdAt: string,
}

interface ITransactionContext {
    transactions: ITransaction[]
}

const TransactionContext = createContext({} as ITransactionContext)

export function TransactionsProvider({ children }: { children: ReactNode }) {
    <TransactionContext.Provider value={{ transactions: [] }}>
        {children}
    </TransactionContext.Provider>
}
