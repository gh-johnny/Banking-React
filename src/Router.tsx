import { Routes, Route } from "react-router-dom"
import { DefaultLayout } from "./layouts/DefaultLayout"
import { Transactions } from "./pages/Transactions"

function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Transactions />} />
                <Route path="/transactions" element={<Transactions />} />
            </Route>
        </Routes>
    )
}

export { Router }
