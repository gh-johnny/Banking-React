import { ArrowCounterClockwise, MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";
import { useForm } from "react-hook-form";
import { searchFormSchema, TSearchFormSchema } from "../../../../libs/searchFormZodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { TransactionsContext } from "../../../../contexts/TransactionContext";

export function SearchForm() {
    const { setTransactions, originalData } = useContext(TransactionsContext)

    const { register, handleSubmit, formState: { isSubmitting } } =
        useForm<TSearchFormSchema>({ resolver: zodResolver(searchFormSchema) })

    const handleSearchTransactions = async (data: TSearchFormSchema) => {
        setTransactions(originalData.filter(transaction => transaction.description.toLowerCase() === data.query.toLowerCase()))
    }

    const onClickReset = () => {
        setTransactions(originalData)
    }

    return (
        <>
            <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
                <input
                    tabIndex={1}
                    type="text"
                    placeholder="Search for transactions"
                    {...register('query')}
                />
                <button
                    tabIndex={3}
                    title="reset"
                    type="button"
                    disabled={isSubmitting}
                    onClick={onClickReset}
                >
                    <ArrowCounterClockwise size={20} />
                    Reset
                </button>
                <button
                    tabIndex={2}
                    title="search"
                    type="submit"
                    disabled={isSubmitting}
                >
                    <MagnifyingGlass size={20} />
                    Search
                </button>
            </SearchFormContainer>
        </>
    )
}
