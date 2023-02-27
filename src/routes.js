import NavBar from 'components/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<NavBar />} />
                    <Route index element={<div>Home</div>} />
            </Routes>
        </BrowserRouter>
    )
}