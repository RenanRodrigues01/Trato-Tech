import {  configureStore } from '@reduxjs/toolkit';
import categoriasSlice from './Reducers/categorias';
import itensSlice from './Reducers/itens';

const store = configureStore({
    reducer: {
        categorias: categoriasSlice,
        itens: itensSlice,
    }
});

export default store;