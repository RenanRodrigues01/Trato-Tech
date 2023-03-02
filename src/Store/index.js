import {  configureStore } from '@reduxjs/toolkit';
import categoriasSlice from './Reducers/categorias';
import itensSlice from './Reducers/itens';
import carrinhoSlice from './Reducers/carrinho';
import buscaSlice from './Reducers/busca';

const store = configureStore({
    reducer: {
        categorias: categoriasSlice,
        itens: itensSlice,
        carrinho: carrinhoSlice,
        busca: buscaSlice
    }
});

export default store;