import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const carrinhoSlice = createSlice({
    name: 'carrinho',
    initialState,
    reducers: {
        mudarCarrinho: (state, { payload }) => {
            const existeItem = state.some(item => item.id === payload);
            if(!existeItem) return [
                ...state,
                {
                    id: payload,
                    quantidade: 1
                }
            ]
            return state.filter(item => item.id !== payload);
        }
    }
});

export const { mudarCarrinho } = carrinhoSlice.actions;

export default carrinhoSlice.reducer