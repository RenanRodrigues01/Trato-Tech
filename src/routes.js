import DefaultPage from 'components/DefaultPage';
import Carrinho from 'Pages/Carrinho';
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
                    <Route path='carrinho' element={<Carrinho />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}