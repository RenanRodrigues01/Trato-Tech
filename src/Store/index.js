import {  configureStore } from '@reduxjs/toolkit';
import categoriasSlice from './Reducers/Categorias';

const store = configureStore({
    reducer: {
        categorias: categoriasSlice
    }
})