import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"
import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router"
import { TransactionsProvider } from "./contexts/TransactionContext"

function App() {

    return (
        <>
            <BrowserRouter>
                <ThemeProvider theme={defaultTheme}>
                    <GlobalStyle />
                    <TransactionsProvider>
                        <Router />
                    </TransactionsProvider>
                </ThemeProvider>
            </BrowserRouter>
        </>
    )
}

export { App }
