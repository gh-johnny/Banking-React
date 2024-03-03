import * as Dialog from '@radix-ui/react-dialog'
import { Overlay, Content, CloseButton, TransactionType, TransactionTypeButton } from './styles'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { TNewTransactionFormZodSchema, newTransactionFormZodSchema } from '../../libs/newTransactionFormZodSchema'
import { zodResolver } from '@hookform/resolvers/zod'

export function NewTransactionModal() {

    const { register, handleSubmit, formState: { isSubmitting } }
        = useForm<TNewTransactionFormZodSchema>({ resolver: zodResolver(newTransactionFormZodSchema) })

    const handleNewTransaction = async (data: TNewTransactionFormZodSchema) => {
        await new Promise(resolve => setTimeout(resolve, 4000))
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

                    <TransactionType>
                        <TransactionTypeButton
                            tabIndex={5}
                            variant='entry'
                            value='entry'
                            {...register('type')}
                        >
                            <ArrowCircleUp size={24} />
                            Entry
                        </TransactionTypeButton>
                        <TransactionTypeButton
                            tabIndex={6}
                            variant='exit'
                            value='exit'
                            {...register('type')}
                        >
                            <ArrowCircleDown size={24} />
                            Exit
                        </TransactionTypeButton>
                    </TransactionType>

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
