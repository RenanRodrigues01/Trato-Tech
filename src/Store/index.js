import {  configureStore } from '@reduxjs/toolkit';
import categoriasSlice from './Reducers/categorias';

const store = configureStore({
    reducer: {
        categorias: categoriasSlice
    }
});

export default store;