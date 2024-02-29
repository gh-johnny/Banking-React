import * as Dialog from '@radix-ui/react-dialog'
import { Overlay, Content, CloseButton, TransactionType, TransactionTypeButton } from './styles'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'

export function NewTransactionModal() {
    return (
        <Dialog.Portal>
            <Overlay />
            <Content>
                <Dialog.Title>New transaction</Dialog.Title>

                <CloseButton tabIndex={1} >
                    <X size={24} />
                </CloseButton>

                <form action=''>
                    <input tabIndex={2} type='text' placeholder='Description' required />
                    <input tabIndex={3} type='number' inputMode='numeric' placeholder='Price' required />
                    <input tabIndex={4} type='text' placeholder='Category' required />

                    <TransactionType>
                        <TransactionTypeButton tabIndex={5} variant='entry' value='entry'>
                            <ArrowCircleUp size={24} />
                            Entry
                        </TransactionTypeButton>
                        <TransactionTypeButton tabIndex={6} variant='exit' value='exit'>
                            <ArrowCircleDown size={24} />
                            Exit
                        </TransactionTypeButton>
                    </TransactionType>

                    <button tabIndex={7} type='submit'>Register</button>
                </form>
            </Content>
        </Dialog.Portal>
    )
}
