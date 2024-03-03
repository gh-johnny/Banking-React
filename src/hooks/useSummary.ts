import { useContext } from "react"
import { TransactionsContext } from "../contexts/TransactionContext"

export function useSummary() {
    const { transactions } = useContext(TransactionsContext)

    const summary = transactions.reduce((acc, curr) => {
        if (curr.type === "entry") {
            acc.entry += Number(curr.price)
            acc.total += Number(curr.price)
            return acc
        }
        acc.exit += Number(curr.price)
        acc.total -= Number(curr.price)
        return acc
    }, { entry: 0, exit: 0, total: 0 })

    return summary
}
