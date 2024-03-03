import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";
import { useForm } from "react-hook-form";
import { searchFormSchema, TSearchFormSchema } from "../../../../libs/searchFormZodSchema";
import { zodResolver } from "@hookform/resolvers/zod";

export function SearchForm() {

    const { register, handleSubmit, formState: { isSubmitting } } =
        useForm<TSearchFormSchema>({ resolver: zodResolver(searchFormSchema) })

    const handleSearchTransactions = async (data: TSearchFormSchema) => {
        await new Promise(resolve => setTimeout(resolve, 4000))
        console.log(data)
    }

    return (
        <>
            <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
                <input
                    type="text"
                    placeholder="Search for transactions"
                    {...register('query')}
                />
                <button
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
