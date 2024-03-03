import * as Dialog from '@radix-ui/react-dialog'
import { Overlay, Content, CloseButton, TransactionType, TransactionTypeButton } from './styles'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import { Controller, useForm } from 'react-hook-form'
import { TNewTransactionFormZodSchema, newTransactionFormZodSchema } from '../../libs/newTransactionFormZodSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'

export function NewTransactionModal() {
    // Apparently styled-components will not let me pass anything other than a simple string
    // The data-set method works but cannot set it imperatively (babel gets mad)
    const [isEntryButtonTypeActive, setIsEntryButtonTypeActive] = useState<'true' | 'false'>('true')
    const [isExitButtonTypeActive, setIsExitButtonTypeActive] = useState<'true' | 'false'>('false')

    const { setValue, control, register, handleSubmit, formState: { isSubmitting } } = useForm<TNewTransactionFormZodSchema>({
        resolver: zodResolver(newTransactionFormZodSchema),
        defaultValues: {
            type: 'entry'
        }
    })

    const onKeyDownFormRadio = (e: string, type: "entry" | "exit") => {
        if (e !== 'Enter') return
        setValue('type', type)
        setIsEntryButtonTypeActive(prev => prev === 'true' ? 'false' : 'true')
        setIsExitButtonTypeActive(prev => prev === 'true' ? 'false' : 'true')
    }

    const handleNewTransaction = async (data: TNewTransactionFormZodSchema) => {
        await new Promise(resolve => setTimeout(resolve, 2000))
        console.log(data)
    }

    return (
        <Dialog.Portal>
            <Overlay />
            <Content>
                <Dialog.Title>New transaction</Dialog.Title>

                <CloseButton tabIndex={1} >
                    <X size={24} />
                </CloseButton>

                <form onSubmit={handleSubmit(handleNewTransaction)}>
                    <input
                        tabIndex={2}
                        type='text'
                        placeholder='Description'
                        {...register('description')}
                    />
                    <input
                        tabIndex={3}
                        type='number'
                        inputMode='numeric'
                        placeholder='Price'
                        {...register('price')}
                    />
                    <input
                        tabIndex={4}
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
                                    onValueChange={field.onChange}
                                    value={field.value}
                                    onKeyDown={e => onKeyDownFormRadio(e.key, field.value)}
                                >
                                    <TransactionTypeButton
                                        tabIndex={5}
                                        variant='entry'
                                        value='entry'
                                        active={isEntryButtonTypeActive}
                                        {...register('type')}
                                    >
                                        <ArrowCircleUp size={24} />
                                        Entry
                                    </TransactionTypeButton>
                                    <TransactionTypeButton
                                        tabIndex={6}
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
                        tabIndex={7}
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
