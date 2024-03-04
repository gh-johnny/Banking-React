import { useContext } from "react";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";
import { TransactionsContext } from "../../contexts/TransactionContext";
import { priceFormatter } from "../../utils/currencyFormatter";
import { dateFormatter } from "../../utils/dateFormatter";
import { TrashSimple } from "phosphor-react";
import { axiosInstance } from "../../libs/axios/axios";

export function Transactions() {
    const { originalData, transactions, setTransactions } = useContext(TransactionsContext)

    const onClickDeleteTransaction = (itemId: string) => {
        axiosInstance.delete(`/transactions/${itemId}`)
            .then(res => {
                if (res.status.toString()[0] !== '2') return
                setTransactions(prev => prev.filter(transaction => transaction.id !== itemId))
                originalData.filter(transaction => transaction.id !== itemId)
            })
            .catch(err => console.error('Unable to delete transaction' + err))
    }

    return (
        <>
            <Summary />
            <TransactionsContainer>
                <SearchForm />
                <TransactionsTable>
                    <tbody>
                        {transactions.length !== 0 ?
                            transactions.map(item => {
                                return <tr key={item.id}>
                                    <td>{item.description}</td>
                                    <td>
                                        <PriceHighlight variant={item.type === 'entry' ? 'entry' : 'exit'}>
                                            {item.type === "exit" || !item.type && '- '}
                                            $ {priceFormatter.format(Number(item.price)).replace('$', '')}
                                        </PriceHighlight>
                                    </td>
                                    <td>{item.category}</td>
                                    <td>{dateFormatter.format(new Date(item.createdAt))}</td>
                                    <td>
                                        <div onClick={() => onClickDeleteTransaction(item.id)}>
                                            <TrashSimple size={18} />
                                        </div>
                                    </td>
                                </tr>
                            })
                            :
                            <tr>
                                <td width={'100%'}>No data was found</td>
                            </tr>
                        }
                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        </>
    )
}

