import {  configureStore } from '@reduxjs/toolkit';
import categoriasSlice from './Reducers/categorias';
import itensSlice from './Reducers/itens';
import carrinhoSlice from './Reducers/carrinho';

const store = configureStore({
    reducer: {
        categorias: categoriasSlice,
        itens: itensSlice,
        carrinho: carrinhoSlice,
    }
});

export default store;