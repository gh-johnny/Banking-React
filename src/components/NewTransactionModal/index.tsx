import * as Dialog from '@radix-ui/react-dialog'
import { Overlay, Content, CloseButton, TransactionType, TransactionTypeButton } from './styles'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'

export function NewTransactionModal() {
    return (
        <Dialog.Portal>
            <Overlay />
            <Content>
                <Dialog.Title>New transaction</Dialog.Title>

                <CloseButton>
                    <X size={24} />
                </CloseButton>

                <form action=''>
                    <input type='text' placeholder='Description' required />
                    <input type='number' inputMode='numeric' placeholder='Price' required />
                    <input type='text' placeholder='Category' required />

                    <TransactionType>
                        <TransactionTypeButton variant='entry'>
                            <ArrowCircleUp size={24} color="#00b37e" />
                            Entry
                        </TransactionTypeButton>
                        <TransactionTypeButton variant='exit'>
                            <ArrowCircleDown size={24} color="#f75a68" />
                            Exit
                        </TransactionTypeButton>
                    </TransactionType>

                    <button type='submit'>Register</button>
                </form>
            </Content>
        </Dialog.Portal>
    )
}
