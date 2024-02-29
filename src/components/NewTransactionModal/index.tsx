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
                        <TransactionTypeButton variant='entry' value='entry'>
                            <ArrowCircleUp size={24} />
                            Entry
                        </TransactionTypeButton>
                        <TransactionTypeButton variant='exit' value='exit'>
                            <ArrowCircleDown size={24} />
                            Exit
                        </TransactionTypeButton>
                    </TransactionType>

                    <button type='submit'>Register</button>
                </form>
            </Content>
        </Dialog.Portal>
    )
}
