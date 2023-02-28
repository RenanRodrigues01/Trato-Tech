import DefaultPage from 'components/DefaultPage';
import Categoria from 'Pages/Categoria';
import Home from 'Pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<DefaultPage />}>
                    <Route index element={<Home />} />
                    <Route path='categoria/:categoriaId' element={<Categoria />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}