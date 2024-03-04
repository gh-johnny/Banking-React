import * as Dialog from '@radix-ui/react-dialog'
import { Overlay, Content, CloseButton, TransactionType, TransactionTypeButton } from './styles'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import { Controller, useForm } from 'react-hook-form'
import { TNewTransactionFormZodSchema, newTransactionFormZodSchema } from '../../libs/zod/newTransactionFormZodSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext, useState } from 'react'
import { TransactionsContext } from '../../contexts/TransactionContext'
import { axiosInstance } from '../../libs/axios/axios'

export function NewTransactionModal() {
    const { setTransactions } = useContext(TransactionsContext)
    let { originalData } = useContext(TransactionsContext)
    // Apparently styled-components will not let me pass anything other than a simple string
    // The data-set method works but cannot set it imperatively (babel gets mad)
    const [isEntryButtonTypeActive, setIsEntryButtonTypeActive] = useState<'true' | 'false'>('true')
    const [isExitButtonTypeActive, setIsExitButtonTypeActive] = useState<'true' | 'false'>('false')

    const { setValue, control, register, handleSubmit, formState: { isSubmitting } } = useForm<TNewTransactionFormZodSchema>({
        resolver: zodResolver(newTransactionFormZodSchema),
    })

    const onKeyDownFormRadio = (e: string, type: "entry" | "exit") => {
        if (e !== 'Enter') return
        setValue('type', type)
        setIsEntryButtonTypeActive(prev => prev === 'true' ? 'false' : 'true')
        setIsExitButtonTypeActive(prev => prev === 'true' ? 'false' : 'true')
    }

    const onClickFormRadio = (e: "entry" | "exit") => {
        setValue('type', e)
        setIsEntryButtonTypeActive(prev => prev === 'true' ? 'false' : 'true')
        setIsExitButtonTypeActive(prev => prev === 'true' ? 'false' : 'true')
    }

    const handleNewTransaction = async (data: TNewTransactionFormZodSchema) => {
        const { type, price, category, description } = data
        const createdData = {
            id: String(new Date().getTime()),
            description,
            type,
            price,
            category,
            createdAt: String(new Date()),
        }
        originalData = [...originalData, createdData]
        setTransactions(originalData)
        await axiosInstance.post('/transactions', createdData)
            .catch(err => console.error('Failed to create new transaction: ' + err))
    }

    return (
        <Dialog.Portal>
            <Overlay />
            <Content>
                <Dialog.Title>New transaction</Dialog.Title>

                <CloseButton tabIndex={5} >
                    <X size={24} />
                </CloseButton>

                <form onSubmit={handleSubmit(handleNewTransaction)}>
                    <input
                        tabIndex={6}
                        type='text'
                        placeholder='Description'
                        {...register('description')}
                    />
                    <input
                        tabIndex={7}
                        type='number'
                        inputMode='numeric'
                        placeholder='Price'
                        {...register('price')}
                    />
                    <input
                        tabIndex={8}
                        type='text'
                        placeholder='Category'
                        {...register('category')}
                    />

                    <Controller
                        control={control}
                        name='type'
                        render={({ field }) => {
                            return (
                                <TransactionType
                                    onValueChange={e => onClickFormRadio(e as "entry" | "exit")}
                                    value={field.value}
                                    onKeyDown={e => onKeyDownFormRadio(e.key, field.value)}
                                >
                                    <TransactionTypeButton
                                        tabIndex={9}
                                        variant='entry'
                                        value='entry'
                                        active={isEntryButtonTypeActive}
                                        {...register('type')}
                                    >
                                        <ArrowCircleUp size={24} />
                                        Entry
                                    </TransactionTypeButton>
                                    <TransactionTypeButton
                                        tabIndex={10}
                                        variant='exit'
                                        value='exit'
                                        active={isExitButtonTypeActive}
                                        {...register('type')}
                                    >
                                        <ArrowCircleDown size={24} />
                                        Exit
                                    </TransactionTypeButton>
                                </TransactionType>
                            )
                        }}
                    />

                    <button
                        tabIndex={11}
                        type='submit'
                        disabled={isSubmitting}
                    >
                        Register
                    </button>
                </form>
            </Content>
        </Dialog.Portal>
    )
}
